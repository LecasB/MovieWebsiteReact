// Sound.js
import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaBackward, FaForward } from "react-icons/fa";
import tyler from "../../../assets/tyler.jpg";
import mf from "../../../assets/mfdoom.jpg";
import don from "../../../assets/dontoliver.jfif";
import chroma from "../../../assets/chroma.png";
import "./Sound.css";

const Sound = ({ soundFile, bgFunc }) => {
  const audioRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          if (error.name !== "AbortError") {
            console.error("Error playing audio:", error);
          }
        });
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
        return "Awser";
      case 1:
        return "Like Him";
      case 2:
        return "KRYPTONITE";
      case 3:
        return "Meat Grinder";
      default:
        return "";
    }
  };

  const getCurrentBackground = () => {
    switch (currentTrackIndex) {
      case 0:
        return tyler;
      case 1:
        return chroma;
      case 2:
        return don;
      case 3:
        return mf;
      default:
        return "";
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

    const background = getCurrentBackground();
    bgFunc(background);
  }, [currentTrackIndex, soundFile, bgFunc]);

  useEffect(() => {
    if (isPlaying) {
      playAudio();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div>
      <audio ref={audioRef} preload="auto" />
      <div>
        <button style={{ background: "transparent" }} onClick={previousTrack}>
          <FaBackward className="buttonmusic" />
        </button>
        <button
          style={{ background: "transparent" }}
          onClick={isPlaying ? pauseAudio : playAudio}
        >
          {isPlaying ? (
            <FaPause className="buttonmusic" />
          ) : (
            <FaPlay className="buttonmusic" />
          )}
        </button>
        <button style={{ background: "transparent" }} onClick={nextTrack}>
          <FaForward className="buttonmusic" />
        </button>
      </div>
      <p className="ya">Now Playing: {getCurrentTrackName()}</p>
    </div>
  );
};

export default Sound;
