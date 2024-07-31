import { useEffect, useState } from "react";

import "./App.css";

import { PlaylistData, Show } from "./utils/types";

import {
  fetchPlaylist,
  fetchShows,
  getPlaylistDetails,
} from "./utils/fetch-functions";

import HeroSection from "./components/Hero-Section";
import CardsSection from "./components/Cards-Section";

function App() {
  const [shows, setShows] = useState<Show | undefined>();
  const [, setPlaylist] = useState<PlaylistData>();

  useEffect(() => {
    fetchPlaylist("3l90dzwPhIQ6zEuybjTr9G")
      .then((playlist) => {
        return getPlaylistDetails(playlist);
      })
      .then((playlist) => {
        if (!playlist) return;
        setPlaylist(playlist);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  useEffect(() => {
    fetchShows("7swxkecczFgxFuovnXIp5J")
      .then((shows) => {
        setShows(shows);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  return (
    <>
      <HeroSection shows={shows} />
      <CardsSection shows={shows} />
    </>
  );
}

export default App;
