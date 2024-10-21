// src/components/Article.tsx

import React from 'react';
import { Article as ArticleType } from '../api/fetchArticle';
import {Accordion, AccordionItem} from "@nextui-org/accordion";

interface ArticleProps {
  article: ArticleType;
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  const articleContainer = {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
  }
  const articleBody = {
    maxWidth: '40rem',
  };

  return (
    <div style={articleContainer}>
      <div style={articleBody}>
        <h2 className="text-3xl font-bold" >{article.headline}</h2>
        <div className="article-content" dangerouslySetInnerHTML={{ __html: article.articleContent }} />

        <Accordion variant="bordered">
          <AccordionItem  aria-label="Core Facts" title="Core Facts">
            <div className="core-facts" dangerouslySetInnerHTML={{ __html: article.coreFactsContent }} />
          </AccordionItem>
        </Accordion>

      </div>
    </div>
  );
};

export default Article;
