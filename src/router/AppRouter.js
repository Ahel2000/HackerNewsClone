import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Post from '../components/Post'
import PageNotFound from '../components/PageNotFound';
import ShowStories from '../components/ShowStories';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/"  element={<Navigate to="/top" />} />
          <Route
            path="/top" element={<ShowStories type="top"/>}
          />
          <Route
            path="/best" element={<ShowStories type="best"/>}
          />
          <Route
            path="/new" element={<ShowStories type="new"/>}
          />
          <Route
            path="/post/:id" element={<Post/>}
          />
          <Route component={PageNotFound} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
