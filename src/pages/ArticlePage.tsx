import React from 'react';
import { useParams } from 'react-router-dom';
import useGetArticle from '../hooks/useGetArticle';
import FullPageSpinner from '../components/FullPageSpinner';
import Article from '../components/Article/Article';
import MainLayout from '../layouts/MainLayout';

const ArticlePage: React.FC = () => {
  // UseParams with type definition
  const { articleId } = useParams<Record<string, string>>();

  // Type assertion because useParams could return undefined
  const { article, loading, error } = useGetArticle(articleId!);

  return (
    <MainLayout>
      {loading && <FullPageSpinner />}
      {error && <p className="text-red-500">{error}</p>}
      {article && <Article article={article} />}
    </MainLayout>
  );
};

export { ArticlePage };
