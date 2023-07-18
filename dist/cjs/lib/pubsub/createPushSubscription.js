"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPushSubscription = void 0;
const pubsub_1 = require("@google-cloud/pubsub");
const createPushSubscription = async (topicName, pushEndpoint) => {
    try {
        const pubsub = new pubsub_1.PubSub();
        const subscriptionName = topicName + '-sub';
        const [topic] = await pubsub.createTopic(topicName);
        const [subscription] = await topic.createSubscription(subscriptionName, {
            pushConfig: {
                // The URL of the endpoint to which messages should be pushed.
                pushEndpoint: pushEndpoint,
            },
        });
        console.log(`Subscription ${topicName} and ${subscription.name} created.`);
        return subscription.name;
    }
    catch (error) {
        console.log(`createPushSubscription: ${JSON.stringify(error)}`);
        throw new Error(JSON.stringify(error));
    }
};
exports.createPushSubscription = createPushSubscription;
//# sourceMappingURL=createPushSubscription.js.map