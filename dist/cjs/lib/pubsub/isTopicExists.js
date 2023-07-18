"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTopicExists = void 0;
const pubsub_1 = require("@google-cloud/pubsub");
const isTopicExists = async (topicName) => {
    try {
        const pubsub = new pubsub_1.PubSub();
        const [topics] = await pubsub.getTopics();
        // Check if the topic exists in the list of topics
        const exists = topics.some((topic) => topic.name === topicName);
        return exists;
    }
    catch (error) {
        console.log(`isTopicExists: ${JSON.stringify(error)}`);
        throw new Error(JSON.stringify(error));
    }
};
exports.isTopicExists = isTopicExists;
//# sourceMappingURL=isTopicExists.js.map