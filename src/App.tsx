// import React from 'react';
import Article from './components/Article/Article';
import Footer from './components/Footer';
import NewsBanner from './components/NewsBanner';
import useGetArticle from './hooks/useGetArticle';
import FullPageSpinner from './components/FullPageSpinner';

function App() {
  const { article, loading, error } = useGetArticle();

  return (
    <div>
      <NewsBanner />
      {loading && <FullPageSpinner />}
      {error && <p>{error}</p>}
      {article && <Article article={article} />}
      <Footer />
    </div>
  );
}

export default App;
