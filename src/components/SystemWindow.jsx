import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SystemWindow = ({ title, children, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`system-border p-6 relative text-left group ${className}`}
    >
      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 border-2 border-[var(--system-blue)] opacity-0"
        animate={{ 
          opacity: isHovered ? [0, 0.5, 0.3] : 0,
          boxShadow: isHovered ? [
            '0 0 10px rgba(0,168,255,0.3)',
            '0 0 30px rgba(0,168,255,0.6)',
            '0 0 10px rgba(0,168,255,0.3)'
          ] : 'none'
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />

      {/* Scanning line effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,168,255,0.1)] to-transparent pointer-events-none"
          initial={{ y: '-100%' }}
          animate={{ y: '200%' }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Header with animated gradient */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-12 bg-gradient-to-r from-[rgba(0,168,255,0.2)] via-[rgba(0,168,255,0.3)] to-transparent border-b border-[rgba(0,168,255,0.4)] flex items-center px-4 relative overflow-hidden"
        animate={{
          backgroundPosition: isHovered ? ['0%', '100%', '0%'] : '0%'
        }}
        transition={{ duration: 3, repeat: isHovered ? Infinity : 0 }}
      >
        <motion.span
          className="text-[var(--system-blue)] font-bold tracking-widest uppercase text-sm relative z-10"
          animate={{
            textShadow: isHovered ? [
              '0 0 5px rgba(0,168,255,0.8)',
              '0 0 15px rgba(0,168,255,1)',
              '0 0 5px rgba(0,168,255,0.8)'
            ] : 'none'
          }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        >
          System
        </motion.span>
        
        {/* Animated dots */}
        <motion.div
          className="absolute right-4 flex gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.5 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 bg-[var(--system-blue)] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="mt-12 relative z-10">
        {title && (
          <motion.h2
            className="text-2xl mb-6 text-white font-bold border-l-4 border-[var(--system-blue)] pl-4 relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.span
              className="relative z-10"
              animate={{
                textShadow: isHovered ? [
                  '0 0 5px rgba(0,168,255,0.5)',
                  '0 0 15px rgba(0,168,255,0.8)',
                  '0 0 5px rgba(0,168,255,0.5)'
                ] : 'none'
              }}
              transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
            >
              {title}
            </motion.span>
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--system-blue)]"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            />
          </motion.h2>
        )}
        {children}
      </div>

      {/* Enhanced Decorative Corners with animation */}
      <motion.div
        className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--system-blue)]"
        animate={{
          opacity: isHovered ? [0.5, 1, 0.5] : 0.7,
          boxShadow: isHovered ? [
            '0 0 5px rgba(0,168,255,0.5)',
            '0 0 15px rgba(0,168,255,0.8)',
            '0 0 5px rgba(0,168,255,0.5)'
          ] : 'none'
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />
      <motion.div
        className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[var(--system-blue)]"
        animate={{
          opacity: isHovered ? [0.5, 1, 0.5] : 0.7,
          boxShadow: isHovered ? [
            '0 0 5px rgba(0,168,255,0.5)',
            '0 0 15px rgba(0,168,255,0.8)',
            '0 0 5px rgba(0,168,255,0.5)'
          ] : 'none'
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[var(--system-blue)]"
        animate={{
          opacity: isHovered ? [0.5, 1, 0.5] : 0.7,
          boxShadow: isHovered ? [
            '0 0 5px rgba(0,168,255,0.5)',
            '0 0 15px rgba(0,168,255,0.8)',
            '0 0 5px rgba(0,168,255,0.5)'
          ] : 'none'
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--system-blue)]"
        animate={{
          opacity: isHovered ? [0.5, 1, 0.5] : 0.7,
          boxShadow: isHovered ? [
            '0 0 5px rgba(0,168,255,0.5)',
            '0 0 15px rgba(0,168,255,0.8)',
            '0 0 5px rgba(0,168,255,0.5)'
          ] : 'none'
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />

      {/* Corner inner glow effects */}
      {isHovered && (
        <>
          <motion.div
            className="absolute top-0 left-0 w-8 h-8 bg-[radial-gradient(circle,rgba(0,168,255,0.3),transparent)]"
            animate={{
              opacity: [0, 0.5, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-0 right-0 w-8 h-8 bg-[radial-gradient(circle,rgba(0,168,255,0.3),transparent)]"
            animate={{
              opacity: [0, 0.5, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-8 h-8 bg-[radial-gradient(circle,rgba(0,168,255,0.3),transparent)]"
            animate={{
              opacity: [0, 0.5, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-8 h-8 bg-[radial-gradient(circle,rgba(0,168,255,0.3),transparent)]"
            animate={{
              opacity: [0, 0.5, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          />
        </>
      )}
    </motion.div>
  );
};

export default SystemWindow;
