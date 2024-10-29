import { ConnectorConfig, DataConnect, QueryRef, QueryPromise } from 'firebase/data-connect';
export const connectorConfig: ConnectorConfig;

export type TimestampString = string;

export type UUIDString = string;

export type Int64String = string;

export type DateString = string;



export interface ArticleComparison_Key {
  id: UUIDString;
  __typename?: 'ArticleComparison_Key';
}

export interface Article_Key {
  factSetStoryId: UUIDString;
  __typename?: 'Article_Key';
}

export interface FactSet_Key {
  storyId: UUIDString;
  __typename?: 'FactSet_Key';
}

export interface ListStoriesData {
  stories: ({
    id: UUIDString;
    status: {
      id: UUIDString;
      status: string;
    } & StoryStatus_Key;
      publishedAt?: TimestampString | null;
  } & Story_Key)[];
}

export interface StoryStatus_Key {
  id: UUIDString;
  __typename?: 'StoryStatus_Key';
}

export interface Story_Key {
  id: UUIDString;
  __typename?: 'Story_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}



/* Allow users to create refs without passing in DataConnect */
export function listStoriesRef(): QueryRef<ListStoriesData, undefined>;/* Allow users to pass in custom DataConnect instances */
export function listStoriesRef(dc: DataConnect): QueryRef<ListStoriesData,undefined>;

export function listStories(): QueryPromise<ListStoriesData, undefined>;
export function listStories(dc: DataConnect): QueryPromise<ListStoriesData,undefined>;


