import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './Landing.scss';

function Landing({ cover }) {
  const movieBg = `https://image.tmdb.org/t/p/w500${cover?.backdrop_path}`;
  return (
    <section className="landing" style={{ backgroundImage: `url(${movieBg})` }}>
      <div className="landing-cover">
        <h1>{cover?.title}</h1>
        <p className="landing-cover-description">
          {cover?.overview}
        </p>
        <div className="landing-cover-properties">
          <span>
            164 min.
          </span>
          <span>
            Subtitles
          </span>
          <span>
            Imdb: 9.1/10
          </span>
        </div>
        <div className="landing-cover-btns">
          <Button>
            Play
          </Button>
        </div>
      </div>
    </section>
  );
}

Landing.propTypes = {
  cover: PropTypes.objectOf.isRequired,
};

export default Landing;
