/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';
import { getMovies } from '../connection/ApiConnection';

export function useGetMovies() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const movies = getMovies();
    movies.then((res) => {
      setMovieList(res.data.results);
    })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  return movieList;
}
