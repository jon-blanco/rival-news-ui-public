// src/components/Article.tsx

import React from 'react';
import { Spacer } from '@nextui-org/react';
import { Article as ArticleType } from '../../api/fetchArticle';
import CoreFacts from './CoreFacts';

interface ArticleProps {
  article: ArticleType;
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <div className="flex flex-col items-center">
      <Spacer y={10} />
      <div className="max-w-2xl px-4">
        <h2 className="text-3xl py-6 font-extrabold dark:text-white">
          {article.headline}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          By {article.author?.name + ' + Rival AI'} on {article.publishedAt}
        </p>
        <div
          className="rich-text"
          dangerouslySetInnerHTML={{ __html: article.articleContent }}
        />
        {/* <Divider orientation="vertical" /> */}
        <Spacer y={8} />
        <CoreFacts article={article} />
        <Spacer y={20} />
      </div>
    </div>
  );
};

export default Article;
