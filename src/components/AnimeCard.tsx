// components/AnimeCard.tsx
import styled from 'styled-components';
import type { Anime } from './types';


const Card = styled.div`
    border: 1px solid black;
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    max-width: 1000px;
    background-color: #white;
    box-shadow: 0 2px 8px black;
    transition: transform 0.2s;
`;

const AnimeTitle = styled.h2`
    color: #DC143C;
    margin-bottom: 15px;
    font-size: calc(35px + 0.5vw);
`;

const AnimeImage = styled.img`
    width: 300px;
    border-radius: 4px;
    margin-bottom: 15px;
`;

const InfoText = styled.p`
    margin: 8px 0;
    color: #black;
    font-size: calc(18px + 0.2vw);
`;

const Strong = styled.strong`
  color: #0047AB;
`;

const Synopsis = styled.p`
    color: #black;
    font-size: calc(16px + 0.2vw);
    line-height: 1.5;
    margin-top: 10px;
`;

export default function AnimeCard({ anime }: { anime: Anime }) {
  return (
    <Card>
      <AnimeTitle>{anime.title}</AnimeTitle>
      <AnimeImage 
        src={anime.images.jpg.image_url} 
        alt={anime.title}
      />
      <InfoText>
        <Strong>Score:</Strong> {anime.score}
      </InfoText>
      <InfoText>
        <Strong>Episodes:</Strong> {anime.episodes}
      </InfoText>
      <InfoText>
        <Strong>Year:</Strong> {anime.year}
      </InfoText>
      <Synopsis>{anime.synopsis.slice(0, 500)}...</Synopsis>
    </Card>
  );
}