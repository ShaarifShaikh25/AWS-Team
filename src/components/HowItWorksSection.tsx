import React from 'react';
import { STEPS_DATA } from '../data/howItWorksData';
import { Search, FileText, UserCheck, ArrowRight } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-6 h-6 text-purple-400" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-amber-400" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-cyan-400" />;
      default:
        return <Search className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section className="relative py-20 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-3">
            <span>APPLICATION JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A straightforward, transparent 3-step recruitment process.
          </p>
        </div>

        {/* Steps Connected Timeline */}
        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-16 right-16 h-0.5 -translate-y-6 bg-gradient-to-r from-purple-500/40 via-amber-500/40 to-cyan-500/40 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {STEPS_DATA.map((step, idx) => (
              <div
                key={step.step}
                className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-[#0B1026]/90 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl"
              >
                {/* Step Number Circle */}
                <div className="relative mb-5">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-extrabold text-lg bg-[#070B1E] border-2 border-white/20 shadow-lg text-white">
                    {step.step}
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center">
                    {renderIcon(step.iconName)}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>

                {/* Mobile indicator arrow if not last */}
                {idx < STEPS_DATA.length - 1 && (
                  <div className="md:hidden mt-4 text-slate-500">
                    <ArrowRight className="w-5 h-5 rotate-90 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
