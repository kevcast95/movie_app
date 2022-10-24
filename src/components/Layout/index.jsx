import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';

import './Layout.scss';

function Layout({ children }) {
  return (
    <main className="main-layout">
      <Header />
      {children}
      <Footer />
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
