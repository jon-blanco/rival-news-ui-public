import React from 'react';
import MainLayout from '../layouts/MainLayout';
import useGetHomeArticles from '../hooks/useGetHomeArticles';
import ArticleCard from '../components/ArticleDashboard/ArticleCard';

const HomePage: React.FC = () => {
  const { articles } = useGetHomeArticles();

  return (
    <MainLayout>
      <div className="flex flex-col gap-4 py-4">
        {articles.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
      </div>
    </MainLayout>
  );
};

export { HomePage };
