import React from 'react';
import Landing from '../../components/Landing';
import SectionBanner from '../../components/SectionBanner';
import MovieCard from '../../components/MovieCard';
import { useGetMovies } from '../../hooks/useGetMovies';
import './Home.scss';

function Home() {
  const movieList = useGetMovies();
  return (
    <main className="home">
      <Landing cover={movieList[0]} />
      <SectionBanner title="Comedias">
        {
          movieList.map((movie) => (
            <MovieCard
              title={movie.title}
              poster={movie.poster_path}
            />
          ))
        }
      </SectionBanner>
      <SectionBanner title="Terror">
        {
          movieList.map((movie) => (
            <MovieCard
              title={movie.title}
              poster={movie.poster_path}
            />
          ))
        }
      </SectionBanner>
    </main>
  );
}

export default Home;
