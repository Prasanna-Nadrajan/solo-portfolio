import React from 'react';
import SystemWindow from './SystemWindow';

const StatusScreen = () => {
    const stats = [
        { label: 'Strength', value: 95 },
        { label: 'Agility', value: 88 },
        { label: 'Intelligence', value: 92 },
        { label: 'Vitality', value: 85 },
        { label: 'Sense', value: 90 },
    ];

    return (
        <SystemWindow title="Status" className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Profile Info */}
                <div className="space-y-4">
                    <div className="flex justify-between border-b border-[rgba(255,255,255,0.1)] pb-2">
                        <span className="text-gray-400">Name</span>
                        <span className="font-bold text-xl">Prasad</span>
                    </div>
                    <div className="flex justify-between border-b border-[rgba(255,255,255,0.1)] pb-2">
                        <span className="text-gray-400">Job</span>
                        <span className="font-bold text-[var(--system-blue)]">Full Stack Developer</span>
                    </div>
                    <div className="flex justify-between border-b border-[rgba(255,255,255,0.1)] pb-2">
                        <span className="text-gray-400">Title</span>
                        <span className="font-bold text-[var(--system-gold)]">Wolf Slayer</span>
                    </div>
                    <div className="flex justify-between border-b border-[rgba(255,255,255,0.1)] pb-2">
                        <span className="text-gray-400">Level</span>
                        <span className="font-bold text-2xl">75</span>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="space-y-3">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex items-center justify-between">
                            <span className="text-gray-400 w-24">{stat.label}</span>
                            <div className="flex-1 h-2 bg-[rgba(255,255,255,0.1)] mx-3 relative">
                                <div
                                    className="absolute top-0 left-0 h-full bg-[var(--system-blue)] shadow-[0_0_10px_var(--system-blue)]"
                                    style={{ width: `${stat.value}%` }}
                                ></div>
                            </div>
                            <span className="font-mono font-bold text-[var(--system-blue)]">{stat.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* HP/MP Bars */}
            <div className="mt-8 space-y-4">
                <div>
                    <div className="flex justify-between mb-1 text-sm">
                        <span>HP</span>
                        <span>12500 / 12500</span>
                    </div>
                    <div className="h-4 bg-[rgba(255,255,255,0.1)] relative overflow-hidden">
                        <div className="absolute top-0 left-0 h-full w-full bg-[var(--system-danger)] shadow-[0_0_10px_var(--system-danger)]"></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-1 text-sm">
                        <span>MP</span>
                        <span>8400 / 8400</span>
                    </div>
                    <div className="h-4 bg-[rgba(255,255,255,0.1)] relative overflow-hidden">
                        <div className="absolute top-0 left-0 h-full w-[80%] bg-[var(--system-blue)] shadow-[0_0_10px_var(--system-blue)]"></div>
                    </div>
                </div>
            </div>
        </SystemWindow>
    );
};

export default StatusScreen;
