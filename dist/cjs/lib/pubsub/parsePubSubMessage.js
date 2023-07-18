"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePubSubMessage = void 0;
const parsePubSubMessage = (event) => {
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
exports.parsePubSubMessage = parsePubSubMessage;
//# sourceMappingURL=parsePubSubMessage.js.map