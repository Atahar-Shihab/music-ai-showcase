"use client";

import { useState, useRef } from "react";
import { Play, Pause, Disc } from "lucide-react";
import { motion } from "framer-motion";

export default function AudioPlayer({ title, src, model }: { title: string; src: string; model: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
    >
      <div className="flex items-center gap-4">
        <button 
          onClick={togglePlay}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-white/90 transition-colors"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
        </button>
        <div>
          <h4 className="text-white font-medium">{title}</h4>
          <p className="text-white/50 text-sm">{model}</p>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10">
        <Disc className={`w-5 h-5 text-white/50 ${isPlaying ? "animate-spin" : ""}`} />
      </div>
      <audio ref={audioRef} src={src} onEnded={() => setIsPlaying(false)} />
    </motion.div>
  );
}