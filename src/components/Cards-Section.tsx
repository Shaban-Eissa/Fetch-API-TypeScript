import { Show } from "../utils/types";

import { Badge } from "./ui/badge";

const CardsSection = ({ shows }: { shows: Show }) => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Spotify Playlist</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Something new!
              </h2>
              <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground  text-left">
                Here are some of the tracks from the playlist. Click on the
                title to open the playlist in Spotify.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {shows?.episodes?.items?.map((episode) => {
              if (!episode) return null;
              if (!Array.isArray(episode?.images)) {
                return null;
              }
              return (
                <div
                  key={episode?.external_urls?.spotify}
                  className="flex flex-col gap-4"
                >
                  <img
                    src={episode.images[0].url}
                    alt={episode.name}
                    className="rounded-lg"
                  />
                  <div className="flex gap-2 flex-col">
                    <h3 className="text-xl font-semibold">
                      <a
                        href={episode.external_urls?.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {episode.name}
                      </a>
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
