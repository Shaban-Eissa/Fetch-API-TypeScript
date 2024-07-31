import { client } from "../client";
import { Playlist } from "./types";

export const fetchArtist = async (id: string) => {
  const response = await client["/artists/{id}"].get({
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_APP_SPOTIFY_API_KEY}`,
    },
    params: {
      // id: "0ZEn9IRjwIBpU6ZJ19ExOx",
      id,
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const artist = await response.json();
  return artist;
};

export const fetchPlaylist = async (playlist_id: string) => {
  const response = await client["/playlists/{playlist_id}"].get({
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_APP_SPOTIFY_API_KEY}`,
    },
    params: {
      // id: "37i9dQZF1DXcBWIGoYBM5M",
      playlist_id,
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const playlist = await response.json();
  return playlist;
};

// I want to fetch shows with id

export const fetchShows = async (id: string) => {
  const response = await client["/shows/{id}"].get({
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_APP_SPOTIFY_API_KEY}`,
    },
    params: {
      id,
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const shows = await response.json();
  return shows;
};

export const getPlaylistDetails = async (playlist: Playlist) => {
  if (!playlist.tracks || !Array.isArray(playlist.tracks?.items)) {
    return undefined;
  }

  const filteredTracks = await Promise.all(
    playlist.tracks?.items?.map(async (item) => {
      if (!Array.isArray(item.track?.artists)) {
        return undefined;
      }
      const artist = await fetchArtist(item.track?.artists[0].id);

      if (!Array.isArray(artist.images)) {
        return undefined;
      }
      return {
        name: item.track?.name,
        artist: artist.name,
        image: artist.images[0].url,
        link: item.track?.external_urls?.spotify,
      };
    })
  );
  const filtered = {
    name: playlist.name,
    link: playlist.external_urls?.spotify,
    tracks: filteredTracks,
  };

  return filtered;
};
