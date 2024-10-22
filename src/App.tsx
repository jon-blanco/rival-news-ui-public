// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ArticlePage,
  HomePage,
  NotFoundPage,
  PasswordlessEmailAuthPage,
  PasswordlessEmailCallbackPage,
} from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/signin" element={<PasswordlessEmailAuthPage />} />
        <Route
          path="/finishSignUp"
          element={<PasswordlessEmailCallbackPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
