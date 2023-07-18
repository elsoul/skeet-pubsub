"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishTopic = void 0;
const pubsub_1 = require("@google-cloud/pubsub");
const publishTopic = async (topicName, json) => {
    try {
        const pubsub = new pubsub_1.PubSub();
        const messageId = await pubsub.topic(topicName).publishMessage({ json });
        console.log(`Message ${messageId} published.`);
        return messageId;
    }
    catch (error) {
        console.log(`pubsubPublish: ${error}`);
        throw new Error(`pubsubPublish: ${error}`);
    }
};
exports.publishTopic = publishTopic;
//# sourceMappingURL=publishTopic.js.map