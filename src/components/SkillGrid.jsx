import React from 'react';
import SystemWindow from './SystemWindow';
import { Zap, Shield, Brain, Wind, Sword, Eye } from 'lucide-react';

const SkillCard = ({ icon: Icon, name, level, type }) => (
    <div className="bg-[rgba(0,168,255,0.05)] border border-[rgba(0,168,255,0.2)] p-4 flex items-center gap-4 hover:bg-[rgba(0,168,255,0.1)] transition-colors group cursor-pointer">
        <div className="p-2 bg-[rgba(0,168,255,0.1)] rounded group-hover:shadow-[0_0_10px_var(--system-blue)] transition-shadow">
            <Icon className="text-[var(--system-blue)]" size={24} />
        </div>
        <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
                <h4 className="text-sm font-bold">{name}</h4>
                <span className="text-xs text-[var(--system-blue)]">Lv. {level}</span>
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">{type}</div>
        </div>
    </div>
);

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
                {skills.map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
                ))}
            </div>
        </SystemWindow>
    );
};

export default SkillGrid;
