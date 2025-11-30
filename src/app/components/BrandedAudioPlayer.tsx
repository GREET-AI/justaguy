"use client";

import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export function BrandedAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showControls, setShowControls] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    console.log("🎵 Branded togglePlay called!");
    const audio = audioRef.current;
    if (!audio) {
      console.log("❌ No audio element");
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      console.log("⏸️ Audio paused");
    } else {
      audio.volume = volume;
      audio.muted = isMuted;
      
      const playPromise = audio.play();
      if (playPromise) {
        playPromise
          .then(() => {
            console.log("✅ Audio playing!");
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log("❌ Play failed:", err);
          });
      }
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const newMuted = !isMuted;
    audio.muted = newMuted;
    setIsMuted(newMuted);
  };

  return (
    <>
      {/* Audio Element */}
      <audio ref={audioRef} preload="auto" loop>
        <source src="/Website/sounds/soundtrack.mp3" type="audio/mpeg" />
      </audio>

      {/* Branded Player - Top Right */}
      <div 
        className="fixed top-4 right-4 z-40 md:z-50"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <div className="flex items-center gap-2 md:gap-3 bg-gradient-to-r from-green-500 to-green-400 p-[2px] rounded-full shadow-lg shadow-green-500/50">
          <div className="flex items-center gap-2 md:gap-3 bg-black/90 backdrop-blur-sm rounded-full px-2 py-1.5 md:px-4 md:py-2">
            
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 rounded-full transition-all duration-300 shadow-lg shadow-green-500/50 hover:shadow-xl hover:shadow-green-400/70 hover:scale-105"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 md:w-5 md:h-5 text-white" />
              ) : (
                <Play className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" />
              )}
            </button>

            {/* Controls (show on hover) */}
            {showControls && (
              <>
                {/* Mute Button */}
                <button
                  onClick={toggleMute}
                  className="hidden md:flex items-center justify-center w-8 h-8 bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 rounded-full transition-colors duration-200"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-white" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-white" />
                  )}
                </button>

                {/* Volume Slider */}
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => {
                    const newVolume = parseFloat(e.target.value);
                    setVolume(newVolume);
                    if (audioRef.current) {
                      audioRef.current.volume = newVolume;
                    }
                  }}
                  className="hidden md:block w-16 h-2 bg-green-500/20 rounded-lg appearance-none cursor-pointer slider"
                />
              </>
            )}

            {/* Label */}
            <span className="text-green-400 text-xs md:text-sm font-montserrat font-medium hidden sm:inline" style={{ textShadow: "0 0 10px rgba(34, 197, 94, 0.6)" }}>
              {isPlaying ? "♪ PLAYING" : "♪ Feel like a JUSTAGUY"}
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 14px;
          height: 14px;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 8px rgba(34, 197, 94, 0.6);
        }
        .slider::-moz-range-thumb {
          width: 14px;
          height: 14px;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 8px rgba(34, 197, 94, 0.6);
        }
        .slider::-webkit-slider-track {
          background: linear-gradient(90deg, #22c55e, #16a34a);
          height: 3px;
          border-radius: 2px;
        }
      `}</style>
    </>
  );
}
