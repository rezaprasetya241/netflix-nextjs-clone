"use client";
import { Button } from "@/components/ui/button";
import { InfoIcon, PlayCircle } from "lucide-react";
import React, { useState } from "react";
import PlayVideoModal from "./PlayVideoModal";

interface iAppProps {
  overview: string;
  youtubeurl: string;
  id: number;
  age: number;
  title: string;
  releaseDate: number;
  duration: number;
}
function MovieButtons({
  overview,
  youtubeurl,
  id,
  age,
  title,
  releaseDate,
  duration,
}: iAppProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button className="text-lg font-medium" onClick={() => setOpen(true)}>
        <PlayCircle className="mr-2 h-6 w-6" /> play
      </Button>

      <Button
        className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white"
        onClick={() => setOpen(true)}
      >
        <InfoIcon className="mr-2 h-6 w-6" /> Learn More
      </Button>

      <PlayVideoModal
        state={open}
        changeState={setOpen}
        age={age}
        duration={duration}
        key={id}
        overview={overview}
        release={releaseDate}
        title={title}
        youtubeUrl={youtubeurl}
      />
    </>
  );
}

export default MovieButtons;
