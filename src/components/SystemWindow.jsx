import React from 'react';
import { motion } from 'framer-motion';

const SystemWindow = ({ title, children, className = '' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`system-border p-6 relative text-left ${className}`}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-r from-[rgba(0,168,255,0.2)] to-transparent border-b border-[rgba(0,168,255,0.3)] flex items-center px-4">
        <span className="text-blue font-bold tracking-widest uppercase text-sm">System</span>
      </div>

      {/* Content */}
      <div className="mt-8">
        {title && (
          <h2 className="text-2xl mb-6 text-white font-bold border-l-4 border-[var(--system-blue)] pl-3">
            {title}
          </h2>
        )}
        {children}
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[var(--system-blue)]"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[var(--system-blue)]"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[var(--system-blue)]"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[var(--system-blue)]"></div>
    </motion.div>
  );
};

export default SystemWindow;
