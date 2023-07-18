import { PubSub } from '@google-cloud/pubsub';
export const publishTopic = async (queryType, topicName, params) => {
    try {
        const pubsub = new PubSub();
        const data = toGraphqlQuery(queryType, topicName, params);
        const messageId = await pubsub.topic(topicName).publishMessage({ data });
        console.log(`Message ${messageId} published.`);
        return messageId;
    }
    catch (error) {
        console.log(`pubsubPublish: ${error}`);
        throw new Error(`pubsubPublish: ${error}`);
    }
};
const toGraphqlQuery = (queryType, queryName, query) => {
    try {
        const inputString = Object.entries(query)
            .map(([key, value]) => {
            if (value === undefined || value === null) {
                return `${key}: \"\"`; // Convert undefined or null to an empty string
            }
            else if (typeof value === 'number' || typeof value === 'boolean') {
                return `${key}: ${value}`;
            }
            else {
                return `${key}: "${value}"`;
            }
        })
            .join(', ');
        const body = JSON.stringify({
            query: `${queryType} { ${queryName}(input: { ${inputString} }) { response }}`,
            variables: {},
        });
        return body;
    }
    catch (error) {
        throw new Error(`Error in toGraphqlQuery: ${error}`);
    }
};
//# sourceMappingURL=publishTopic.js.map