// import React from 'react';
import Article from './components/Article';
import NewsBanner from './components/NewsBanner';
import useGetArticle from './hooks/useGetArticle';

function App() {
  const { article, loading, error } = useGetArticle();

  return (
    <div>
      <NewsBanner />
      {loading && <p>Loading article...</p>}
      {error && <p>{error}</p>}
      {article && <Article article={article} />}
    </div>
  );
}

export default App;
