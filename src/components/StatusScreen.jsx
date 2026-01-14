import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SystemWindow from './SystemWindow';

const StatusScreen = () => {
    const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0, 0]);
    const [hpAnimated, setHpAnimated] = useState(0);
    const [mpAnimated, setMpAnimated] = useState(0);

    const stats = [
        { label: 'Strength', value: 95 },
        { label: 'Agility', value: 88 },
        { label: 'Intelligence', value: 92 },
        { label: 'Vitality', value: 85 },
        { label: 'Sense', value: 90 },
    ];

    const profileInfo = [
        { label: 'Name', value: 'Prasad', color: 'text-white' },
        { label: 'Job', value: 'Full Stack Developer', color: 'text-[var(--system-blue)]' },
        { label: 'Title', value: 'Wolf Slayer', color: 'text-[var(--system-gold)]' },
        { label: 'Level', value: '75', color: 'text-white', isLevel: true },
    ];

    useEffect(() => {
        // Animate stats
        stats.forEach((stat, index) => {
            setTimeout(() => {
                setAnimatedStats(prev => {
                    const newStats = [...prev];
                    newStats[index] = stat.value;
                    return newStats;
                });
            }, index * 200);
        });

        // Animate HP/MP
        setTimeout(() => setHpAnimated(100), 500);
        setTimeout(() => setMpAnimated(80), 700);
    }, []);

    return (
        <SystemWindow title="Status" className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Profile Info */}
                <div className="space-y-4">
                    {profileInfo.map((info, index) => (
                        <motion.div
                            key={info.label}
                            className="flex justify-between border-b border-[rgba(255,255,255,0.1)] pb-2 relative group"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ x: 5 }}
                        >
                            <span className="text-gray-400">{info.label}</span>
                            <motion.span
                                className={`font-bold ${info.isLevel ? 'text-2xl' : 'text-xl'} ${info.color} relative`}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ 
                                    delay: index * 0.1 + 0.2,
                                    type: "spring",
                                    stiffness: 200
                                }}
                            >
                                {info.value}
                                {info.isLevel && (
                                    <motion.span
                                        className="absolute -top-1 -right-1 text-xs text-[var(--system-gold)]"
                                        animate={{ 
                                            opacity: [1, 0.5, 1],
                                            scale: [1, 1.2, 1]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        ⭐
                                    </motion.span>
                                )}
                            </motion.span>
                            <motion.div
                                className="absolute bottom-0 left-0 h-0.5 bg-[var(--system-blue)]"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Stats Grid */}
                <div className="space-y-3">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="flex items-center justify-between group"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="text-gray-400 w-24 text-sm">{stat.label}</span>
                            <div className="flex-1 h-3 bg-[rgba(255,255,255,0.1)] mx-3 relative rounded-full overflow-hidden border border-[rgba(0,168,255,0.2)]">
                                <motion.div
                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--system-blue)] to-cyan-400 shadow-[0_0_10px_var(--system-blue)] relative"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${animatedStats[index]}%` }}
                                    transition={{ 
                                        duration: 1,
                                        delay: index * 0.2,
                                        ease: "easeOut"
                                    }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-white"
                                        animate={{ 
                                            opacity: [0, 0.6, 0],
                                            x: ['-100%', '100%']
                                        }}
                                        transition={{ 
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: index * 0.2
                                        }}
                                    />
                                </motion.div>
                            </div>
                            <motion.span
                                className="font-mono font-bold text-[var(--system-blue)] min-w-[3ch] text-right"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ 
                                    delay: index * 0.2 + 0.5,
                                    type: "spring",
                                    stiffness: 200
                                }}
                            >
                                {animatedStats[index]}
                            </motion.span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* HP/MP Bars */}
            <div className="mt-8 space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="flex justify-between mb-2 text-sm">
                        <span className="font-bold text-[var(--system-danger)]">HP</span>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            12500 / 12500
                        </motion.span>
                    </div>
                    <div className="h-5 bg-[rgba(255,255,255,0.1)] relative overflow-hidden rounded-full border border-[rgba(255,51,51,0.3)]">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--system-danger)] to-red-500 shadow-[0_0_15px_var(--system-danger)] relative"
                            initial={{ width: 0 }}
                            animate={{ width: `${hpAnimated}%` }}
                            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-white"
                                animate={{ 
                                    opacity: [0, 0.5, 0],
                                    x: ['-100%', '100%']
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-bold text-white drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                                {Math.round(hpAnimated)}%
                            </span>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    <div className="flex justify-between mb-2 text-sm">
                        <span className="font-bold text-[var(--system-blue)]">MP</span>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                        >
                            8400 / 8400
                        </motion.span>
                    </div>
                    <div className="h-5 bg-[rgba(255,255,255,0.1)] relative overflow-hidden rounded-full border border-[rgba(0,168,255,0.3)]">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--system-blue)] to-cyan-400 shadow-[0_0_15px_var(--system-blue)] relative"
                            initial={{ width: 0 }}
                            animate={{ width: `${mpAnimated}%` }}
                            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-white"
                                animate={{ 
                                    opacity: [0, 0.5, 0],
                                    x: ['-100%', '100%']
                                }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                            />
                        </motion.div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-bold text-white drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                                {Math.round(mpAnimated)}%
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </SystemWindow>
    );
};

export default StatusScreen;
