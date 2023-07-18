import { Query } from 'typesaurus';
export declare const queryGrandGrandGrandChildCollectionItem: <GrandGrandGrandChild, GrandGrandChild, GrandChild, Child, Parent>(parentCollectionName: string, childCollectionName: string, grandChildCollectionName: string, grandGrandChildCollectionName: string, grandGrandGrandChildCollectionName: string, parentId: string, childCollectionId: string, grandChildCollectionId: string, grandGrandChildCollectionId: string, queries: Query<GrandGrandGrandChild, keyof GrandGrandGrandChild>[]) => Promise<import("typesaurus").Doc<GrandGrandGrandChild>[]>;