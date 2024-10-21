import { useState, useEffect } from "react";
import { fetchArticle, Article } from "../api/fetchArticle";

const useGetArticle = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const fetchedArticle = await fetchArticle();
        setArticle(fetchedArticle);
      } catch (err) {
        setError("Failed to fetch article:");
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, []);

  return { article, loading, error };
};

export default useGetArticle;
