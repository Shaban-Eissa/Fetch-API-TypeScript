import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

import { Show } from "../utils/types";

const HeroSection = ({ shows }: { shows: Show | undefined }) => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-28 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              feTS Documentation
              <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              This is the start of something new
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Build and consume REST APIs with ease. No more compromises on type
              safety in client-server communication. All thanks to TypeScript
              and OpenAPI.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4" variant="outline">
              <a href={shows?.external_urls?.spotify}>Open in Spotify</a>
            </Button>
            <Button size="lg" className="gap-4">
              Find out more on GitHub Repo
              {/* <MoveRight className="w-4 h-4" /> */}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
