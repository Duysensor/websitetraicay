import React from 'react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiInfo, FiAlertCircle } from 'react-icons/fi';

export default function Toast() {
  const { toast } = useApp();

  return (
    <div className="fixed top-6 right-6 z-50 pointer-events-none max-w-sm w-full">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className={`p-4 rounded-2xl shadow-xl flex items-center gap-3 border pointer-events-auto bg-white ${
              toast.type === 'error'
                ? 'border-red-100 text-red-800'
                : toast.type === 'info'
                ? 'border-blue-100 text-blue-800'
                : 'border-green-100 text-brand-secondary'
            }`}
          >
            {toast.type === 'error' ? (
              <FiAlertCircle className="text-red-500 flex-shrink-0" size={20} />
            ) : toast.type === 'info' ? (
              <FiInfo className="text-blue-500 flex-shrink-0" size={20} />
            ) : (
              <FiCheckCircle className="text-brand-primary flex-shrink-0" size={20} />
            )}
            <span className="text-sm font-semibold">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
