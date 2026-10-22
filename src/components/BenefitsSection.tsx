import React from 'react';
import { Sparkles, Users, TrendingUp, Briefcase, Award } from 'lucide-react';
import { BENEFITS_DATA } from '../data/benefitsData';
import type { BenefitItem } from '../types';

export const BenefitsSection: React.FC = () => {
  const renderIcon = (iconName: BenefitItem['iconName'], color: string) => {
    const props = { className: 'w-6 h-6', style: { color } };
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Users':
        return <Users {...props} />;
      case 'TrendingUp':
        return <TrendingUp {...props} />;
      case 'Briefcase':
        return <Briefcase {...props} />;
      case 'Award':
        return <Award {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section id="why-join" className="relative py-24 bg-[#080D22] border-t border-b border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GROWTH & COMMUNITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            More Than a Team. A Place to Grow.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Turn your skills into meaningful contributions while learning alongside a community of builders.
          </p>
        </div>

        {/* Horizontal Feature Strip on desktop / Responsive grid on tablet & mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {BENEFITS_DATA.map((benefit, index) => (
            <div
              key={benefit.id}
              className="group relative flex flex-col items-start p-6 rounded-2xl bg-[#0B1026]/80 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Top Accent Line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: benefit.accentColor }}
              />

              {/* Icon Container */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${benefit.accentColor}18`,
                  border: `1px solid ${benefit.accentColor}40`,
                }}
              >
                {renderIcon(benefit.iconName, benefit.accentColor)}
              </div>

              {/* Number tag */}
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Pillar 0{index + 1}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
