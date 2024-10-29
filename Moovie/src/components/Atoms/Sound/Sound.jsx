import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaBackward, FaForward } from "react-icons/fa";

const Sound = ({ soundFile }) => {
  const audioRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % soundFile.length);
  };

  const previousTrack = () => {
    setCurrentTrackIndex(
      (prevIndex) => (prevIndex - 1 + soundFile.length) % soundFile.length
    );
  };

  const getCurrentTrackName = () => {
    switch (currentTrackIndex) {
      case 0:
        return "Noid";
      case 1:
        return "St. Chroma";
      case 2:
        return "Thought I Was Dead";
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = soundFile[currentTrackIndex];
      audioRef.current.load();

      if (isPlaying) {
        playAudio();
      }
    }
  }, [currentTrackIndex, isPlaying, soundFile]);

  return (
    <div>
      <audio ref={audioRef} preload="auto" />
      <div>
        <button onClick={previousTrack}>
          <FaBackward />
        </button>
        <button onClick={isPlaying ? pauseAudio : playAudio}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={nextTrack}>
          <FaForward />
        </button>
      </div>
      <p style={{ color: "white" }}>Now Playing: {getCurrentTrackName()}</p>
    </div>
  );
};

export default Sound;
