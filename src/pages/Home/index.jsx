import React from 'react';
import Landing from '../../components/Landing';
import SectionBanner from '../../components/SectionBanner';
import { useGetMovies } from '../../hooks/useGetMovies';
import './Home.scss';

function Home() {
  const movieList = useGetMovies();
  return (
    <main className="home">
      <Landing cover={movieList[0]} />
      <SectionBanner movies={movieList} title="Comedias" />
      <SectionBanner movies={movieList} title="Drama" />
      <SectionBanner movies={movieList} title="Terror" />
    </main>
  );
}

export default Home;
