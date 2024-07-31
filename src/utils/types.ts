import { NormalizeOAS, OASOutput } from "fets";
import { spotify } from "./spotify-openapi";

export type Playlist = OASOutput<
  NormalizeOAS<typeof spotify>,
  "/playlists/{playlist_id}",
  "get",
  "200"
>;

export type Show = OASOutput<
  NormalizeOAS<typeof spotify>,
  "/shows/{id}",
  "get",
  "200"
>;

export type PlaylistData = {
  name?: string;
  link?: string;
  tracks?: (
    | {
        name?: string;
        artist?: string;
        image?: string;
        link?: string;
      }
    | undefined
  )[];
};

export type ShowData = {
  name?: string;
  link?: string;
  episodes?: (
    | {
        name?: string;
        artist?: string;
        image?: string;
        link?: string;
      }
    | undefined
  )[];
};
