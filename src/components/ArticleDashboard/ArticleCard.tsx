import React from 'react';
import { Card } from '@nextui-org/react';
import { Article as ArticleType } from '../../api/fetchArticle';
import { useNavigate } from 'react-router-dom';

interface ArticleProps {
  article: ArticleType;
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="p-4 max-w-md"
      isPressable
      onClick={() => navigate(`/article/${article.id}`)}
    >
      <h2 className="text-l py-6 font-extrabold dark:text-white">
        {article.headline}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        By {article.author?.name + ' + Rival AI'} on {article.publishedAt}
      </p>
    </Card>
  );
};

export default Article;
