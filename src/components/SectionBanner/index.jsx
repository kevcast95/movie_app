import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';

import './SectionBanner.scss';

function SectionBanner({ movies, title }) {
  return (
    <section className="section-banner">
      <div className="section-banner__title">
        <h1 style={{ color: '#fff' }}>{title}</h1>
        <span className="section-banner__bar" />
      </div>
      <div className="section-banner__movies">
        {
          movies.map((movie) => (
            <MovieCard
              title={movie.title}
              poster={movie.poster_path}
            />
          ))
        }
      </div>
    </section>
  );
}

SectionBanner.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
  title: PropTypes.string.isRequired,
};

export default SectionBanner;
