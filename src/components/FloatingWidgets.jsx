import React, { useState, useEffect } from 'react';
import { FiArrowUp, FiMessageCircle, FiPhone } from 'react-icons/fi';
import { SiZalo } from 'react-icons/si'; // Let's use simple letters/shapes if not directly imported or React Icons has it
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingWidgets() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      
      {/* Floating Call Button */}
      <a
        href="tel:19001234"
        className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 relative group"
        title="Gọi điện ngay"
      >
        <span className="absolute inset-0 rounded-full bg-green-500/40 animate-ping" />
        <FiPhone size={20} className="relative z-10 animate-bounce" />
      </a>

      {/* Floating Zalo Button */}
      <a
        href="https://zalo.me"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 relative font-bold text-xs"
        title="Trò chuyện Zalo"
      >
        <span className="absolute inset-0 rounded-full bg-blue-500/40 animate-ping" />
        <span className="relative z-10 font-black tracking-tight text-[11px]">ZALO</span>
      </a>

      {/* Floating Messenger Button */}
      <a
        href="https://m.me"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-pink-500 hover:opacity-90 text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 relative"
        title="Facebook Messenger"
      >
        <FiMessageCircle size={22} />
      </a>

      {/* Back To Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-brand-primary hover:bg-brand-primary-hover text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer"
            title="Lên đầu trang"
          >
            <FiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
