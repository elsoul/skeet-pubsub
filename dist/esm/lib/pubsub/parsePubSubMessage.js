export const parsePubSubMessage = (event) => {
    let pubsubMessage = '';
    try {
        pubsubMessage = Buffer.from(event.data.message.data, 'base64').toString('utf-8');
    }
    catch (err) {
        throw new Error(`Failed to decode pubsub message: ${err}`);
    }
    let pubsubObject;
    try {
        pubsubObject = JSON.parse(pubsubMessage);
        return pubsubObject;
    }
    catch (err) {
        throw new Error(`Failed to parse pubsub message: ${err}`);
    }
};
//# sourceMappingURL=parsePubSubMessage.js.map