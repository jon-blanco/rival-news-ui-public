// src/components/Article.tsx

import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { Avatar } from '@nextui-org/react';
import { Article as ArticleType } from '../../api/fetchArticle';

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
          <Avatar
            isBordered
            color="primary"
            radius="lg"
            src={article.author?.imgUrl}
          />
        }
        subtitle={'by ' + article.author?.name}
        title="Core Facts"
      >
        <div
          className="rich-text"
          dangerouslySetInnerHTML={{ __html: article.coreFactsContent }}
        />
      </AccordionItem>
    </Accordion>
  );
};

export default CoreFacts;
