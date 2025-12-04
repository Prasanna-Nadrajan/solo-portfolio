import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StatusScreen from './components/StatusScreen';
import SkillGrid from './components/SkillGrid';
import DungeonList from './components/DungeonList';

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
      <div className="h-screen w-full flex flex-col items-center justify-center bg-[var(--system-dark)] text-[var(--system-blue)] font-mono">
        <AnimatePresence mode="wait">
          {initStep === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-2xl tracking-widest animate-pulse"
            >
              SYSTEM INITIALIZATION...
            </motion.div>
          )}
          {initStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <div className="text-xl mb-2">CHECKING PLAYER REQUIREMENTS</div>
              <div className="w-64 h-1 bg-[rgba(0,168,255,0.2)] mx-auto rounded overflow-hidden">
                <motion.div
                  className="h-full bg-[var(--system-blue)]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2 }}
                />
              </div>
            </motion.div>
          )}
          {initStep === 2 && (
            <motion.div
              key="step2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              className="text-4xl font-bold text-[var(--system-blue)] glow-text border-2 border-[var(--system-blue)] p-6 bg-[rgba(0,168,255,0.1)]"
            >
              WELCOME, PLAYER.
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setLoading(false)}
          className="absolute bottom-8 text-xs text-[var(--system-blue-dim)] hover:text-[var(--system-blue)] tracking-widest uppercase border-none"
        >
          Skip Initialization
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      <header className="fixed top-0 left-0 w-full z-50 bg-[rgba(10,10,18,0.9)] backdrop-blur-md border-b border-[rgba(0,168,255,0.2)]">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-[var(--system-blue)] font-bold text-xl tracking-widest">
            SYSTEM
          </div>
          <div className="flex gap-4 text-sm text-gray-400">
            <span className="hover:text-[var(--system-blue)] cursor-pointer">STATUS</span>
            <span className="hover:text-[var(--system-blue)] cursor-pointer">SKILLS</span>
            <span className="hover:text-[var(--system-blue)] cursor-pointer">QUESTS</span>
          </div>
        </div>
      </header>

      <main className="pt-24 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StatusScreen />
          <SkillGrid />
          <DungeonList />

          <SystemWindow title="Messages" className="mt-8 text-center py-12">
            <p className="text-gray-400 mb-4">You have no new messages from the Guild.</p>
            <button>Contact Guild Master</button>
          </SystemWindow>
        </motion.div>
      </main>
    </div>
  );
}

export default App;
