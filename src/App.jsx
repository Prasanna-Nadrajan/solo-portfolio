import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StatusScreen from './components/StatusScreen';
import SkillGrid from './components/SkillGrid';
import DungeonList from './components/DungeonList';
import SystemWindow from './components/SystemWindow';

function App() {
  const [loading, setLoading] = useState(true);
  const [initStep, setInitStep] = useState(0);

  useEffect(() => {
    const runSequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setInitStep(1); // Checking Requirements

      await new Promise(resolve => setTimeout(resolve, 1500));
      setInitStep(2); // Welcome

      await new Promise(resolve => setTimeout(resolve, 2000));
      setInitStep(3); // Exit Welcome

      await new Promise(resolve => setTimeout(resolve, 500)); // Wait for exit animation
      setLoading(false);
    };

    runSequence();
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-[var(--system-dark)] text-[var(--system-blue)] font-mono relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[var(--system-blue)] rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0.3,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {initStep === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
              }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="text-2xl tracking-widest relative z-10"
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                SYSTEM INITIALIZATION...
              </motion.span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[var(--system-blue)]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              />
            </motion.div>
          )}
          {initStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              className="text-center relative z-10"
            >
              <motion.div 
                className="text-xl mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                CHECKING PLAYER REQUIREMENTS
              </motion.div>
              <div className="w-80 h-2 bg-[rgba(0,168,255,0.2)] mx-auto rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-[var(--system-blue)] to-cyan-400 relative"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white"
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </motion.div>
                <motion.div
                  className="absolute top-0 right-0 h-full w-8 bg-gradient-to-r from-transparent to-[var(--system-blue)]"
                  animate={{ x: [-32, 320] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <motion.div
                className="mt-4 text-sm text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Loading system modules...
              </motion.div>
            </motion.div>
          )}
          {initStep === 2 && (
            <motion.div
              key="step2"
              initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                rotateY: 0,
              }}
              exit={{ 
                scale: 1.2, 
                opacity: 0,
                rotateY: 90,
              }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              className="text-5xl font-bold text-[var(--system-blue)] glow-text border-2 border-[var(--system-blue)] p-8 bg-[rgba(0,168,255,0.1)] relative z-10 shadow-[0_0_30px_rgba(0,168,255,0.5)]"
            >
              <motion.span
                animate={{ 
                  textShadow: [
                    "0 0 10px rgba(0,168,255,0.8)",
                    "0 0 20px rgba(0,168,255,1), 0 0 30px rgba(0,168,255,0.8)",
                    "0 0 10px rgba(0,168,255,0.8)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                WELCOME, PLAYER.
              </motion.span>
              <motion.div
                className="absolute inset-0 border-2 border-[var(--system-blue)]"
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setLoading(false)}
          className="absolute bottom-8 text-xs text-[var(--system-blue-dim)] hover:text-[var(--system-blue)] tracking-widest uppercase border-none relative z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Skip Initialization
          </motion.span>
        </motion.button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20 relative">
      {/* Animated background grid */}
      <motion.div
        className="fixed inset-0 pointer-events-none opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,168,255,0.1),transparent_50%)]" />
      </motion.div>

      <motion.header 
        className="fixed top-0 left-0 w-full z-50 bg-[rgba(10,10,18,0.95)] backdrop-blur-md border-b border-[rgba(0,168,255,0.3)] shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <motion.div 
            className="text-[var(--system-blue)] font-bold text-xl tracking-widest relative"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative z-10">SYSTEM</span>
            <motion.div
              className="absolute inset-0 bg-[var(--system-blue)] opacity-0"
              whileHover={{ opacity: 0.1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
          <div className="flex gap-6 text-sm">
            {['STATUS', 'SKILLS', 'QUESTS'].map((item, index) => (
              <motion.span
                key={item}
                className="text-gray-400 hover:text-[var(--system-blue)] cursor-pointer relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  textShadow: "0 0 10px rgba(0,168,255,0.8)"
                }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--system-blue)]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            ))}
          </div>
        </div>
      </motion.header>

      <main className="pt-24 px-4 max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <StatusScreen />
          <SkillGrid />
          <DungeonList />

          <SystemWindow title="Messages" className="mt-8 text-center py-12">
            <motion.p 
              className="text-gray-400 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              You have no new messages from the Guild.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,168,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Guild Master
            </motion.button>
          </SystemWindow>
        </motion.div>
      </main>
    </div>
  );
}

export default App;
