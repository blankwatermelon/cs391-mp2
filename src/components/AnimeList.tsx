// components/AnimeList.tsx
import AnimeCard from './AnimeCard';
import type { Anime } from './types';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: calc(40px + 0.5vw);
  color: #000;
  margin-bottom: 20px;
`;


export default function AnimeList({ animeData }: { animeData: Anime[] }) {
  return (
    <div>
      {/* mapping through animeData array and for each anime in the array, render an AnimeCard component */}
      <Title>Top Animes from MAL</Title>
      {animeData.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
}