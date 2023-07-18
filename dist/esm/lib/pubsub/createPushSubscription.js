import { PubSub } from '@google-cloud/pubsub';
export const createPushSubscription = async (topicName, pushEndpoint) => {
    try {
        const pubsub = new PubSub();
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
//# sourceMappingURL=createPushSubscription.js.map