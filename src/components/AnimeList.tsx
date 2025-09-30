// components/AnimeList.tsx
import AnimeCard from './AnimeCard';
import type { Anime } from './types';


export default function AnimeList({ animeData }: { animeData: Anime[] }) {
  return (
    <div>
      {/* mapping through animeData array and for each anime in the array, render an AnimeCard component */}
      <h1>Top Animes from MAL</h1>
      {animeData.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
}