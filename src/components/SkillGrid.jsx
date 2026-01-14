import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SystemWindow from './SystemWindow';
import { Zap, Shield, Brain, Wind, Sword, Eye } from 'lucide-react';

const SkillCard = ({ icon: Icon, name, level, type, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [animatedLevel, setAnimatedLevel] = useState(0);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            let current = 0;
            const interval = setInterval(() => {
                current += 2;
                if (current >= level) {
                    setAnimatedLevel(level);
                    clearInterval(interval);
                } else {
                    setAnimatedLevel(current);
                }
            }, 20);
            return () => clearInterval(interval);
        }, index * 150);
        return () => clearTimeout(timer);
    }, [level, index]);

    return (
        <motion.div
            className="bg-[rgba(0,168,255,0.05)] border border-[rgba(0,168,255,0.2)] p-4 flex items-center gap-4 group cursor-pointer relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 15
            }}
            whileHover={{ 
                scale: 1.05,
                borderColor: "var(--system-blue)",
                boxShadow: "0 0 20px rgba(0,168,255,0.5)"
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Animated background gradient on hover */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[rgba(0,168,255,0.1)] to-[rgba(0,168,255,0.05)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />

            {/* Glowing particles effect */}
            {isHovered && (
                <>
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-[var(--system-blue)] rounded-full"
                            initial={{
                                x: "50%",
                                y: "50%",
                                opacity: 0.8,
                            }}
                            animate={{
                                x: `${50 + (Math.random() - 0.5) * 200}%`,
                                y: `${50 + (Math.random() - 0.5) * 200}%`,
                                opacity: 0,
                                scale: 2,
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                        />
                    ))}
                </>
            )}

            <motion.div
                className="p-3 bg-[rgba(0,168,255,0.1)] rounded relative z-10"
                whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1
                }}
                transition={{ duration: 0.5 }}
            >
                <Icon 
                    className="text-[var(--system-blue)] relative z-10" 
                    size={28}
                />
                <motion.div
                    className="absolute inset-0 bg-[var(--system-blue)] opacity-0 rounded"
                    animate={{ 
                        opacity: isHovered ? [0, 0.3, 0] : 0,
                        scale: [1, 1.5, 1]
                    }}
                    transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
                />
            </motion.div>

            <div className="flex-1 relative z-10">
                <div className="flex justify-between items-center mb-2">
                    <motion.h4
                        className="text-sm font-bold"
                        animate={{ 
                            color: isHovered ? "var(--system-blue)" : "white"
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        {name}
                    </motion.h4>
                    <motion.span
                        className="text-xs text-[var(--system-blue)] font-mono font-bold"
                        animate={{ scale: isHovered ? 1.2 : 1 }}
                    >
                        Lv. {animatedLevel}
                    </motion.span>
                </div>
                
                {/* Level progress bar */}
                <div className="h-1.5 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden mb-1">
                    <motion.div
                        className="h-full bg-gradient-to-r from-[var(--system-blue)] to-cyan-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${animatedLevel}%` }}
                        transition={{ 
                            duration: 1,
                            delay: index * 0.15,
                            ease: "easeOut"
                        }}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 uppercase tracking-wider">{type}</span>
                    <motion.span
                        className="text-xs text-[var(--system-blue)]"
                        animate={{ opacity: isHovered ? [1, 0.5, 1] : 1 }}
                        transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
                    >
                        {animatedLevel}%
                    </motion.span>
        </div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[var(--system-blue)] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[var(--system-blue)] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[var(--system-blue)] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[var(--system-blue)] opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
    );
};

const SkillGrid = () => {
    const skills = [
        { name: 'React.js', level: 90, type: 'Active', icon: Zap },
        { name: 'Node.js', level: 85, type: 'Active', icon: Brain },
        { name: 'TypeScript', level: 80, type: 'Passive', icon: Shield },
        { name: 'Tailwind CSS', level: 95, type: 'Passive', icon: Wind },
        { name: 'Next.js', level: 82, type: 'Active', icon: Sword },
        { name: 'GraphQL', level: 75, type: 'Active', icon: Eye },
    ];

    return (
        <SystemWindow title="Skills" className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                    <SkillCard key={skill.name} {...skill} index={index} />
                ))}
            </div>
        </SystemWindow>
    );
};

export default SkillGrid;
