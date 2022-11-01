import React from 'react';
import PropTypes from 'prop-types';

function Properties({ date, lang, rate }) {
  return (
    <>
      <span>
        {date}
      </span>
      <span>
        Languages:
        {' '}
        {lang}
      </span>
      <span>
        Imdb:
        {' '}
        {rate}
      </span>

    </>
  );
}

Properties.propTypes = {
  date: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
};

export default Properties;
