import React from 'react';
import { TEAMS_DATA } from '../data/teamsData';
import { TeamCard } from './TeamCard';
import type { TeamItem } from '../types';
import { Compass } from 'lucide-react';

interface TeamsSectionProps {
  onPlaceholderClick: (team: TeamItem) => void;
}

export const TeamsSection: React.FC<TeamsSectionProps> = ({ onPlaceholderClick }) => {
  return (
    <section id="teams" className="relative py-24 bg-[#050816]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-purple-600/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>FIND YOUR PLACE</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            One Community. Five Teams.
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Explore the teams, discover where your skills fit, and apply to contribute to the AWS Student Builder Group at GHRCEM Jalgaon.
          </p>
        </div>

        {/* 5 Responsive Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 items-stretch">
          {TEAMS_DATA.map((team) => (
            <div key={team.id} className="flex">
              <TeamCard team={team} onPlaceholderClick={onPlaceholderClick} />
            </div>
          ))}
        </div>

        {/* Informative helper note below cards */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400">
            💡 Choose the team that aligns closest with your capabilities and interests. Each card directs to its respective application form.
          </p>
        </div>

      </div>
    </section>
  );
};
