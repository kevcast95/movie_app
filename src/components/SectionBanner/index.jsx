import React from 'react';
import PropTypes from 'prop-types';
import './SectionBanner.scss';

function SectionBanner({ children, title }) {
  return (
    <section className="section-banner">
      <h1 style={{ color: '#fff' }}>{title}</h1>
      <div className="section-banner__movies">
        {children}
      </div>
    </section>
  );
}

SectionBanner.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default SectionBanner;
