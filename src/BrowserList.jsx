import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Popular from './pages/Popular';
import Series from './pages/Series';

function BrowserList() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/popular" element={<Popular />} />
        </Routes>
        <Routes>
          <Route path="/series" element={<Series />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default BrowserList;
