import { useEffect, useState } from "react"
import AnimeList from "./components/AnimeList";
import type { Anime } from "./components/types";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

// adding button to view more animes for fun and practice like in lab
const ViewMoreButton = styled.button`
  background-color: #2980b9;
  color: white;
  padding: 12px 24px;
  font-size: calc(14px + 0.2vw);
  border: none;
  border-radius: 8px;
  margin: 20px auto;
  &:hover {
    background-color: #1f5f8b;
  }
`;

export default function App() {
  const [data, setData] = useState<Anime[]>([]); // state that holds the anime data from api
  const [limit, setLimit] = useState(5); // state to keep track of how many animes to fetch

  useEffect(()=>{
    async function fetchData() {
      const rawData= await fetch(`https://api.jikan.moe/v4/top/anime?limit=${limit}`); // fetch data from api
      const actualData = await rawData.json(); // convert raw data to json so we can use it
      setData(actualData.data); // retrieve data from api and put it in state array
      // specify the name of the array that holds the data from api
    }
    fetchData()
      .then(() => {console.log("all good")}) // call the async function to say everything is done
      .catch((e)=>{console.log("This error:" + e + "occured.")}); // catch any errors

  },[limit]) // useEffect will run everytime limit changes

  return (
    <Container>
      <AnimeList animeData={data} />
      <ViewMoreButton onClick={() => setLimit(limit + 5)}>
        View More
      </ViewMoreButton>
    </Container>
  )
}


