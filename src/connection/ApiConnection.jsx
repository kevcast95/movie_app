/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const getMovies = () => {
  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=21d48dd94eb2105951a273ec15768f0a&language=en-US';
  return axios({
    method: 'GET',
    url,
  });
};
