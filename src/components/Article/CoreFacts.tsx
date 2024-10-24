// src/components/Article.tsx

import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { Avatar, Divider, Spacer } from '@nextui-org/react';
import { Article as ArticleType } from '../../api/fetchArticle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons'; // Import the icon here

interface ArticleProps {
  article: ArticleType;
}

const CoreFacts: React.FC<ArticleProps> = ({ article }) => {
  return (
    <Accordion variant="splitted">
      <AccordionItem
        key="1"
        aria-label={article.author?.name}
        startContent={
          <div>
            <img className="h-6 w-6" src="/icons/list-check-solid.svg" />
          </div>
        }
        subtitle={'by ' + article.author?.name}
        title="Core Facts"
      >
        <div
          className="rich-text"
          dangerouslySetInnerHTML={{ __html: article.coreFactsContent }}
        />
        <Spacer y={4} />
        <Divider />
        <Spacer y={4} />
        <div className="flex gap-4 items-center">
          <Avatar
            isBordered
            color="primary"
            radius="lg"
            src={article.author?.imgUrl}
            className="shrink-0"
          />
          <p className="text-gray-600">{article.author?.bio}</p>
        </div>
        <Spacer y={4} />
      </AccordionItem>
    </Accordion>
  );
};

export default CoreFacts;
