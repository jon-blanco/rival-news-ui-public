import { ArticleNotFoundError } from './_errors';
import { mockArticleData } from './_mockArticleData';

import { executeQuery } from 'firebase/data-connect';
import { listStoriesRef } from '@rival-news/generated';

export interface Article {
  id: number;
  headline: string;
  coreFactsContent: string;
  articleContent: string;
  publishedAt: string;
  author?: Author;
}

export interface Author {
  id: number;
  name: string;
  bio: string;
  imgUrl?: string;
}

// Simulate a delay to mimic real API calls
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchArticle = async (articleId: string): Promise<Article> => {
  const ref = listStoriesRef();
  const { data } = await executeQuery(ref);
  console.log('stories', data.stories);

  await delay(500); // Simulate network latency

  const article = mockArticleData.find(
    (article) => article.id == Number(articleId),
  )!;

  if (!article) {
    throw new ArticleNotFoundError(
      "The article you're looking for was not found.",
    );
  }

  return article;
};

export const fetchArticles = async (): Promise<Article[]> => {
  await delay(500); // Simulate network latency
  return mockArticleData;
};
