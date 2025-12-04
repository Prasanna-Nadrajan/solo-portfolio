import React from 'react';
import SystemWindow from './SystemWindow';
import { AlertTriangle, Lock, Unlock } from 'lucide-react';

const DungeonCard = ({ title, rank, type, status, description }) => {
    const getRankColor = (r) => {
        switch (r) {
            case 'S': return 'text-[var(--system-gold)]';
            case 'A': return 'text-[var(--system-danger)]';
            case 'B': return 'text-[var(--system-blue)]';
            default: return 'text-white';
        }
    };

    return (
        <div className="border border-[rgba(0,168,255,0.2)] bg-[rgba(0,10,18,0.8)] p-4 relative overflow-hidden group hover:border-[var(--system-blue)] transition-colors">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <div className={`text-2xl font-bold ${getRankColor(rank)}`}>{rank}-Rank</div>
                    <div className="text-xs text-gray-500 uppercase">{type} Dungeon</div>
                </div>
                {status === 'Locked' ? <Lock size={16} className="text-gray-600" /> : <Unlock size={16} className="text-[var(--system-blue)]" />}
            </div>

            <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--system-blue)] transition-colors">{title}</h3>
            <p className="text-sm text-gray-400 mb-4">{description}</p>

            <div className="flex gap-2">
                <button className="text-xs py-1 px-3 border border-[rgba(0,168,255,0.3)] hover:bg-[rgba(0,168,255,0.1)]">
                    View Details
                </button>
                {status === 'Clear' && (
                    <span className="text-xs py-1 px-3 bg-[rgba(0,168,255,0.1)] text-[var(--system-blue)] flex items-center gap-1">
                        CLEARED
                    </span>
                )}
            </div>

            {/* Warning Stripe for S-Rank */}
            {rank === 'S' && (
                <div className="absolute top-0 right-0 p-1">
                    <AlertTriangle size={12} className="text-[var(--system-danger)]" />
                </div>
            )}
        </div>
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
                {dungeons.map((dungeon) => (
                    <DungeonCard key={dungeon.title} {...dungeon} />
                ))}
            </div>
        </SystemWindow>
    );
};

export default DungeonList;
