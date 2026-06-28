import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoPlaySharp } from 'react-icons/io5';

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-full h-[400px] md:h-full min-h-[380px] rounded-3xl overflow-hidden shadow-xl bg-black border border-gray-100 group"
    >
      {isPlaying ? (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="EUS FRUIT - Premium Fruit Farm Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 w-full h-full">
          {/* Farm Video Thumbnail */}
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop"
            alt="Organic Orchard Video Thumbnail"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors duration-300" />

          {/* Centered Glowing Play Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <button
              onClick={() => setIsPlaying(true)}
              className="w-20 h-20 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-lg relative cursor-pointer group-hover:scale-110 transition-transform duration-300"
            >
              {/* Outer pulsing ring */}
              <span className="absolute inset-0 rounded-full bg-brand-primary/40 animate-ping" />
              <IoPlaySharp size={32} className="ml-1" />
            </button>
            <p className="mt-4 font-bold text-sm md:text-base uppercase tracking-wider text-white drop-shadow-md">
              Khám Phá Nông Trại EUS FRUIT
            </p>
            <p className="text-xs text-gray-200/80 font-light drop-shadow-md">
              Xem quy trình chăm sóc và đóng gói đạt chuẩn quốc tế
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}
