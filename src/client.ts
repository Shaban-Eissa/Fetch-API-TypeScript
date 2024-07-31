import { createClient, NormalizeOAS } from "fets";
import { spotify } from "./utils/spotify-openapi";

export const client = createClient<NormalizeOAS<typeof spotify>>({
  endpoint: "https://api.spotify.com/v1",
});
