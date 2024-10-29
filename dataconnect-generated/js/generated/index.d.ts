import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';
export const connectorConfig: ConnectorConfig;

export type TimestampString = string;

export type UUIDString = string;

export type Int64String = string;

export type DateString = string;



export interface Article_Key {
  id: UUIDString;
  __typename?: 'Article_Key';
}

export interface FactSet_Key {
  id: UUIDString;
  __typename?: 'FactSet_Key';
}

export interface InsertArticleData {
  article_insert: Article_Key;
}

export interface InsertArticleVariables {
  factSet: FactSet_Key;
  generatedContent: string;
  reviewedContent?: string | null;
  hasBeenReviewed: boolean;
  isLive: boolean;
}

export interface InsertFactSetData {
  factSet_insert: FactSet_Key;
}

export interface InsertFactSetVariables {
  story: Story_Key;
  coreFacts: string;
}

export interface InsertStoryData {
  story_insert: Story_Key;
}

export interface InsertStoryStatusData {
  storyStatus_insert: StoryStatus_Key;
}

export interface InsertStoryStatusVariables {
  status: string;
}

export interface InsertStoryVariables {
  status: StoryStatus_Key;
  storyReferenceName: string;
  publishedAt?: TimestampString | null;
}

export interface ListArticlesData {
  articles: ({
    id: UUIDString;
    factSet: {
      id: UUIDString;
      story: {
        id: UUIDString;
        status: {
          id: UUIDString;
          status: string;
        } & StoryStatus_Key;
          publishedAt?: TimestampString | null;
      } & Story_Key;
        coreFacts: string;
    } & FactSet_Key;
      generatedContent: string;
      reviewedContent?: string | null;
      hasBeenReviewed: boolean;
      isLive: boolean;
  } & Article_Key)[];
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
export function insertStoryStatusRef(vars: InsertStoryStatusVariables): MutationRef<InsertStoryStatusData, InsertStoryStatusVariables>;
/* Allow users to pass in custom DataConnect instances */
export function insertStoryStatusRef(dc: DataConnect, vars: InsertStoryStatusVariables): MutationRef<InsertStoryStatusData,InsertStoryStatusVariables>;

export function insertStoryStatus(vars: InsertStoryStatusVariables): MutationPromise<InsertStoryStatusData, InsertStoryStatusVariables>;
export function insertStoryStatus(dc: DataConnect, vars: InsertStoryStatusVariables): MutationPromise<InsertStoryStatusData,InsertStoryStatusVariables>;


/* Allow users to create refs without passing in DataConnect */
export function insertStoryRef(vars: InsertStoryVariables): MutationRef<InsertStoryData, InsertStoryVariables>;
/* Allow users to pass in custom DataConnect instances */
export function insertStoryRef(dc: DataConnect, vars: InsertStoryVariables): MutationRef<InsertStoryData,InsertStoryVariables>;

export function insertStory(vars: InsertStoryVariables): MutationPromise<InsertStoryData, InsertStoryVariables>;
export function insertStory(dc: DataConnect, vars: InsertStoryVariables): MutationPromise<InsertStoryData,InsertStoryVariables>;


/* Allow users to create refs without passing in DataConnect */
export function insertFactSetRef(vars: InsertFactSetVariables): MutationRef<InsertFactSetData, InsertFactSetVariables>;
/* Allow users to pass in custom DataConnect instances */
export function insertFactSetRef(dc: DataConnect, vars: InsertFactSetVariables): MutationRef<InsertFactSetData,InsertFactSetVariables>;

export function insertFactSet(vars: InsertFactSetVariables): MutationPromise<InsertFactSetData, InsertFactSetVariables>;
export function insertFactSet(dc: DataConnect, vars: InsertFactSetVariables): MutationPromise<InsertFactSetData,InsertFactSetVariables>;


/* Allow users to create refs without passing in DataConnect */
export function insertArticleRef(vars: InsertArticleVariables): MutationRef<InsertArticleData, InsertArticleVariables>;
/* Allow users to pass in custom DataConnect instances */
export function insertArticleRef(dc: DataConnect, vars: InsertArticleVariables): MutationRef<InsertArticleData,InsertArticleVariables>;

export function insertArticle(vars: InsertArticleVariables): MutationPromise<InsertArticleData, InsertArticleVariables>;
export function insertArticle(dc: DataConnect, vars: InsertArticleVariables): MutationPromise<InsertArticleData,InsertArticleVariables>;


/* Allow users to create refs without passing in DataConnect */
export function listArticlesRef(): QueryRef<ListArticlesData, undefined>;/* Allow users to pass in custom DataConnect instances */
export function listArticlesRef(dc: DataConnect): QueryRef<ListArticlesData,undefined>;

export function listArticles(): QueryPromise<ListArticlesData, undefined>;
export function listArticles(dc: DataConnect): QueryPromise<ListArticlesData,undefined>;


