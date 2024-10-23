import { useState, useEffect } from 'react';
import { Article, fetchArticles } from '../api/fetchArticle';

const useGetHomeArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const fetchedArticles = await fetchArticles();
        setArticles(fetchedArticles);
      } catch (err) {
        setError('Failed to fetch articles:');
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, []);

  return { articles, loading, error };
};

export default useGetHomeArticles;
