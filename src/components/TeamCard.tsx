import React from 'react';
import { Cpu, Palette, Megaphone, UsersRound, CalendarDays, ArrowUpRight, Lock } from 'lucide-react';
import type { TeamItem } from '../types';
import { TEAM_FORM_LINKS, isFormUrlConfigured } from '../config/teamLinks';

interface TeamCardProps {
  team: TeamItem;
  onPlaceholderClick: (team: TeamItem) => void;
}

export const TeamCard: React.FC<TeamCardProps> = ({ team, onPlaceholderClick }) => {
  const formUrl = TEAM_FORM_LINKS[team.roleKey];
  const isConfigured = isFormUrlConfigured(formUrl);

  const renderIcon = () => {
    const props = { className: 'w-5 h-5 text-white' };
    switch (team.iconName) {
      case 'Cpu':
        return <Cpu {...props} />;
      case 'Palette':
        return <Palette {...props} />;
      case 'Megaphone':
        return <Megaphone {...props} />;
      case 'UsersRound':
        return <UsersRound {...props} />;
      case 'CalendarDays':
        return <CalendarDays {...props} />;
      default:
        return <Cpu {...props} />;
    }
  };

  const handleApplyClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (!isConfigured) {
      e.preventDefault();
      onPlaceholderClick(team);
    }
  };

  return (
    <div
      className="group relative flex flex-col justify-between h-full w-full rounded-2xl p-5 sm:p-5.5 transition-all duration-300 bg-[#0B1026]/90 border border-white/10 hover:border-white/20 hover:-translate-y-1.5 hover:shadow-2xl"
      style={{
        boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.7)',
      }}
    >
      {/* Top subtle glow on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${team.accentHex}, transparent)`,
        }}
      />

      {/* Inner ambient glow on hover */}
      <div
        className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: team.accentHex }}
      />

      <div>
        {/* Top bar: Icon and Status pill */}
        <div className="flex items-center justify-between mb-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-md"
            style={{
              backgroundColor: `${team.accentHex}25`,
              border: `1px solid ${team.accentHex}60`,
            }}
          >
            {renderIcon()}
          </div>

          {/* Status pill */}
          {isConfigured ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Applications Open
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30">
              <Lock className="w-3 h-3" />
              Link Soon
            </span>
          )}
        </div>

        {/* Team Name: Fixed min-height so all titles align across 1 or 2 lines */}
        <h3 className="text-lg font-bold text-white mb-2 min-h-[48px] flex items-center group-hover:text-amber-400 transition-colors leading-snug">
          {team.name}
        </h3>

        {/* Description: Fixed min-height so all card bodies align */}
        <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed mb-4 min-h-[84px]">
          {team.description}
        </p>

        {/* Skill / Responsibility Tags: Structured & consistent across all cards */}
        <div className="flex flex-wrap gap-1.5 mb-5 min-h-[54px] content-start">
          {team.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[11px] px-2.5 py-0.5 rounded-md font-medium border tracking-wide whitespace-nowrap ${team.tagBg} ${team.tagText}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Action Button */}
      <div className="pt-2 border-t border-white/5">
        {isConfigured ? (
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleApplyClick}
            className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white shadow-md transition-all duration-200 bg-gradient-to-r ${team.accentGradient} active:scale-95 group-hover:shadow-lg`}
            aria-label={`Apply for ${team.name} via Google Form (opens in new tab)`}
          >
            <span>Apply Now</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ) : (
          <button
            type="button"
            onClick={handleApplyClick}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white/90 shadow-md transition-all duration-200 bg-slate-800 hover:bg-slate-700/90 border border-white/10 hover:border-amber-500/40 active:scale-95"
            title="Application link is being configured. Click for details."
            aria-label={`Application link coming soon for ${team.name}`}
          >
            <span>Apply Now</span>
            <ArrowUpRight className="w-4 h-4 text-amber-400 opacity-80" />
          </button>
        )}
      </div>
    </div>
  );
};
