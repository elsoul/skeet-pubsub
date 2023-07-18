export declare const publishTopic: <T extends {
    [key: string]: any;
}>(queryType: QueryType, topicName: string, params: T) => Promise<string>;
type QueryType = 'query' | 'mutation';
export {};
