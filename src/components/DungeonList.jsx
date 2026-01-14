import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SystemWindow from './SystemWindow';
import { AlertTriangle, Lock, Unlock, Sparkles } from 'lucide-react';

const DungeonCard = ({ title, rank, type, status, description, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    const getRankColor = (r) => {
        switch (r) {
            case 'S': return {
                text: 'text-[var(--system-gold)]',
                border: 'border-[var(--system-gold)]',
                glow: 'shadow-[0_0_20px_rgba(255,215,0,0.5)]',
                bg: 'bg-[rgba(255,215,0,0.05)]'
            };
            case 'A': return {
                text: 'text-[var(--system-danger)]',
                border: 'border-[var(--system-danger)]',
                glow: 'shadow-[0_0_20px_rgba(255,51,51,0.5)]',
                bg: 'bg-[rgba(255,51,51,0.05)]'
            };
            case 'B': return {
                text: 'text-[var(--system-blue)]',
                border: 'border-[var(--system-blue)]',
                glow: 'shadow-[0_0_20px_rgba(0,168,255,0.5)]',
                bg: 'bg-[rgba(0,168,255,0.05)]'
            };
            default: return {
                text: 'text-white',
                border: 'border-gray-500',
                glow: 'shadow-[0_0_10px_rgba(255,255,255,0.3)]',
                bg: 'bg-[rgba(255,255,255,0.02)]'
            };
        }
    };

    const rankStyle = getRankColor(rank);

    return (
        <motion.div
            className={`border ${rankStyle.border} ${rankStyle.bg} p-5 relative overflow-hidden group cursor-pointer`}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                delay: index * 0.15,
                type: "spring",
                stiffness: 150,
                damping: 15
            }}
            whileHover={{ 
                scale: 1.03,
                borderColor: rankStyle.border.includes('gold') ? 'var(--system-gold)' : 
                           rankStyle.border.includes('danger') ? 'var(--system-danger)' : 
                           'var(--system-blue)',
                boxShadow: rankStyle.glow
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Animated background gradient */}
            <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${rankStyle.bg} opacity-0`}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />

            {/* Rank badge with animation */}
            <div className="flex justify-between items-start mb-4 relative z-10">
                <div>
                    <motion.div
                        className={`text-3xl font-bold ${rankStyle.text} relative inline-block`}
                        animate={isHovered ? {
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                        } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        {rank}-Rank
                        {rank === 'S' && (
                            <motion.span
                                className="absolute -top-1 -right-1"
                                animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.2, 1]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                <Sparkles size={16} className="text-[var(--system-gold)]" />
                            </motion.span>
                        )}
                    </motion.div>
                    <motion.div
                        className="text-xs text-gray-500 uppercase mt-1"
                        animate={{ opacity: isHovered ? 1 : 0.7 }}
                    >
                        {type} Dungeon
                    </motion.div>
                </div>
                <motion.div
                    animate={{
                        scale: isHovered ? 1.2 : 1,
                        rotate: isHovered ? [0, -10, 10, 0] : 0
                    }}
                    transition={{ duration: 0.5 }}
                >
                    {status === 'Locked' ? (
                        <Lock size={18} className="text-gray-600" />
                    ) : (
                        <Unlock size={18} className="text-[var(--system-blue)]" />
                    )}
                </motion.div>
            </div>

            {/* Title with glow effect */}
            <motion.h3
                className={`text-lg font-bold mb-2 relative z-10 ${rankStyle.text}`}
                animate={{
                    textShadow: isHovered ? [
                        `0 0 5px ${rankStyle.text.includes('gold') ? 'rgba(255,215,0,0.8)' : 
                          rankStyle.text.includes('danger') ? 'rgba(255,51,51,0.8)' : 
                          'rgba(0,168,255,0.8)'}`,
                        `0 0 15px ${rankStyle.text.includes('gold') ? 'rgba(255,215,0,1)' : 
                          rankStyle.text.includes('danger') ? 'rgba(255,51,51,1)' : 
                          'rgba(0,168,255,1)'}`,
                        `0 0 5px ${rankStyle.text.includes('gold') ? 'rgba(255,215,0,0.8)' : 
                          rankStyle.text.includes('danger') ? 'rgba(255,51,51,0.8)' : 
                          'rgba(0,168,255,0.8)'}`
                    ] : 'none'
                }}
                transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
            >
                {title}
            </motion.h3>

            <motion.p
                className="text-sm text-gray-400 mb-4 relative z-10"
                animate={{ opacity: isHovered ? 1 : 0.8 }}
            >
                {description}
            </motion.p>

            <div className="flex gap-2 relative z-10">
                <motion.button
                    className="text-xs py-2 px-4 border border-[rgba(0,168,255,0.3)] hover:bg-[rgba(0,168,255,0.1)] relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.span
                        className="relative z-10"
                        animate={{ opacity: isHovered ? [1, 0.7, 1] : 1 }}
                        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
                    >
                        View Details
                    </motion.span>
                    <motion.div
                        className="absolute inset-0 bg-[var(--system-blue)]"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.button>
                {status === 'Clear' && (
                    <motion.span
                        className="text-xs py-2 px-4 bg-[rgba(0,168,255,0.1)] text-[var(--system-blue)] flex items-center gap-1 border border-[rgba(0,168,255,0.3)]"
                        animate={{
                            boxShadow: [
                                '0 0 5px rgba(0,168,255,0.5)',
                                '0 0 15px rgba(0,168,255,0.8)',
                                '0 0 5px rgba(0,168,255,0.5)'
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        ✓ CLEARED
                    </motion.span>
                )}
                {status === 'In Progress' && (
                    <motion.span
                        className="text-xs py-2 px-4 bg-[rgba(255,215,0,0.1)] text-[var(--system-gold)] flex items-center gap-1 border border-[rgba(255,215,0,0.3)]"
                        animate={{
                            opacity: [1, 0.7, 1]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        IN PROGRESS
                    </motion.span>
                )}
            </div>

            {/* Warning indicator for S-Rank */}
            {rank === 'S' && (
                <motion.div
                    className="absolute top-2 right-2"
                    animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <AlertTriangle size={16} className="text-[var(--system-danger)]" />
                </motion.div>
            )}

            {/* Corner accents */}
            <motion.div
                className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${rankStyle.border}`}
                animate={{ opacity: isHovered ? 1 : 0.5 }}
            />
            <motion.div
                className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${rankStyle.border}`}
                animate={{ opacity: isHovered ? 1 : 0.5 }}
            />
            <motion.div
                className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${rankStyle.border}`}
                animate={{ opacity: isHovered ? 1 : 0.5 }}
            />
            <motion.div
                className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${rankStyle.border}`}
                animate={{ opacity: isHovered ? 1 : 0.5 }}
            />

            {/* Scanning line effect on hover */}
            {isHovered && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,168,255,0.1)] to-transparent"
                    initial={{ y: '-100%' }}
                    animate={{ y: '200%' }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            )}
        </motion.div>
    );
};

const DungeonList = () => {
    const dungeons = [
        { title: 'E-Commerce Platform', rank: 'A', type: 'Instant', status: 'Clear', description: 'A full-stack shopping experience with payment integration.' },
        { title: 'Social Media Dashboard', rank: 'B', type: 'Raid', status: 'Clear', description: 'Real-time analytics and user management system.' },
        { title: 'AI Image Generator', rank: 'S', type: 'Red Gate', status: 'In Progress', description: 'Generative adversarial network integration for custom art.' },
        { title: 'Portfolio V1', rank: 'C', type: 'Normal', status: 'Clear', description: 'The previous iteration of this portfolio site.' },
    ];

    return (
        <SystemWindow title="Dungeon List (Projects)" className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dungeons.map((dungeon, index) => (
                    <DungeonCard key={dungeon.title} {...dungeon} index={index} />
                ))}
            </div>
        </SystemWindow>
    );
};

export default DungeonList;
