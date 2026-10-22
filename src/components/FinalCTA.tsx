import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const scrollToTeams = () => {
    const element = document.getElementById('teams');
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative py-16 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner container */}
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-purple-950/80 via-[#0B1026] to-indigo-950/80 border border-purple-500/30 shadow-2xl">
          
          {/* Ambient Glows */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-amber-500/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            
            {/* Left Content */}
            <div className="flex flex-col sm:flex-row items-center gap-5 max-w-2xl">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/30">
                <Rocket className="w-8 h-8 text-slate-950" />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-2">
                  Ready to Build Something Meaningful?
                </h2>
                <p className="text-sm sm:text-base text-slate-300">
                  Find your team, bring your skills, and contribute to the campus tech community.
                </p>
              </div>
            </div>

            {/* Right Button */}
            <div className="shrink-0">
              <button
                type="button"
                onClick={scrollToTeams}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-[#FF9900] to-orange-500 hover:from-amber-300 hover:to-orange-400 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Explore Open Teams</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
