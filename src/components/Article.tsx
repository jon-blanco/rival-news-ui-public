// src/components/Article.tsx

import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { Avatar, Spacer, } from '@nextui-org/react';
import { Article as ArticleType } from '../api/fetchArticle';

interface ArticleProps {
  article: ArticleType;
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-2xl px-4">
        <h2 className="text-3xl pt-4 font-extrabold dark:text-white">
          {article.headline}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {article.publishedAt}
        </p>
        {/* Rendered HTML content with global styles */}
        <p className="text-sm text-gray-500 dark:text-gray-400">{article.author?.name + " + AI | Rival News"}</p>
        <div
          className="rich-text"
          dangerouslySetInnerHTML={{ __html: article.articleContent }}
        />
        {/* <Divider orientation="vertical" /> */}
        <Spacer y={8} />
        <Accordion variant="splitted">
          <AccordionItem
            key="1"
            aria-label="Chung Miller"
            startContent={
              <Avatar
                isBordered
                color="primary"
                radius="lg"
                src={article.author?.imgUrl}
              />
            }
            subtitle={"by " + article.author?.name}
            title="Core Facts"
          >
            <div
              className="rich-text"
              dangerouslySetInnerHTML={{ __html: article.coreFactsContent }}
            />
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Article;
