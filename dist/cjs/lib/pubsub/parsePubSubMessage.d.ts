import { CloudEvent } from 'firebase-functions/lib/v2/core';
import { MessagePublishedData } from 'firebase-functions/v2/pubsub';
export declare const parsePubSubMessage: <T>(event: CloudEvent<MessagePublishedData<any>>) => T;
