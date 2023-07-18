import { PubSub } from '@google-cloud/pubsub';
export const isTopicExists = async (topicName) => {
    try {
        const pubsub = new PubSub();
        const [topics] = await pubsub.getTopics();
        // Check if the topic exists in the list of topics
        const exists = topics.some((topic) => {
            const lastPart = topic.name.split('/').pop();
            return lastPart === topicName;
        });
        return exists;
    }
    catch (error) {
        console.log(`isTopicExists: ${JSON.stringify(error)}`);
        throw new Error(JSON.stringify(error));
    }
};
//# sourceMappingURL=isTopicExists.js.map