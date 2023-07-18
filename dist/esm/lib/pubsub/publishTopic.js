import { PubSub } from '@google-cloud/pubsub';
export const publishTopic = async (topicName, json) => {
    try {
        const pubsub = new PubSub();
        const messageId = await pubsub.topic(topicName).publishMessage({ json });
        console.log(`Message ${messageId} published.`);
        return messageId;
    }
    catch (error) {
        console.log(`pubsubPublish: ${JSON.stringify(error)}`);
        throw new Error(JSON.stringify(error));
    }
};
//# sourceMappingURL=publishTopic.js.map