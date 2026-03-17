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

      {/* Branded Player - Bottom Right on Mobile, Top Right on Desktop */}
      <div 
        className="fixed bottom-4 right-4 md:top-4 md:bottom-auto z-[60]"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        onTouchStart={() => setShowControls(true)}
      >
        <div className="flex items-center gap-2 md:gap-3 bg-gradient-to-r from-[#fcc32a] to-[#fdd85c] p-[2px] rounded-full shadow-lg shadow-[#fcc32a]/50">
          <div className="flex items-center gap-2 md:gap-3 bg-black/90 backdrop-blur-sm rounded-full px-2 py-1.5 md:px-4 md:py-2">
            
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="flex items-center justify-center w-10 h-10 md:w-10 md:h-10 bg-gradient-to-r from-[#fcc32a] to-[#fdd85c] hover:from-[#fdd85c] hover:to-[#ffe066] active:scale-95 rounded-full transition-all duration-300 shadow-lg shadow-[#fcc32a]/50 hover:shadow-xl hover:shadow-[#fcc32a]/70 hover:scale-105"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 md:w-5 md:h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 md:w-5 md:h-5 text-white ml-0.5" />
              )}
            </button>

            {/* Controls (show on hover/touch) */}
            {showControls && (
              <>
                {/* Mute Button */}
                <button
                  onClick={toggleMute}
                  className="hidden md:flex items-center justify-center w-8 h-8 bg-[#fcc32a]/20 hover:bg-[#fcc32a]/30 border border-[#fcc32a]/50 rounded-full transition-colors duration-200"
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
                  className="hidden md:block w-16 h-2 bg-[#fcc32a]/20 rounded-lg appearance-none cursor-pointer slider"
                />
              </>
            )}

            {/* Label - visible on mobile too */}
            <span className="text-[#fcc32a] text-xs md:text-sm font-montserrat font-medium" style={{ textShadow: "0 0 10px rgba(252, 195, 42, 0.6)" }}>
              {isPlaying ? "♪ PLAYING" : "♪ Feel like a Bandit"}
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 14px;
          height: 14px;
          background: linear-gradient(135deg, #fcc32a, #d4a017);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 8px rgba(252, 195, 42, 0.6);
        }
        .slider::-moz-range-thumb {
          width: 14px;
          height: 14px;
          background: linear-gradient(135deg, #fcc32a, #d4a017);
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 8px rgba(252, 195, 42, 0.6);
        }
        .slider::-webkit-slider-track {
          background: linear-gradient(90deg, #fcc32a, #d4a017);
          height: 3px;
          border-radius: 2px;
        }
      `}</style>
    </>
  );
}
