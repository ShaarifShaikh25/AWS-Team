import React from 'react';
import { BookOpen, Rocket, Users, Target, Building2, MapPin } from 'lucide-react';

const PILLARS = [
  {
    title: 'Learn',
    description: 'Gain practical knowledge of cloud computing, software architecture, modern development tools, and industry workflows.',
    icon: BookOpen,
    accent: 'border-purple-500/30 text-purple-400 bg-purple-950/40',
  },
  {
    title: 'Build',
    description: 'Collaborate with fellow students on tangible technical solutions, campus initiatives, and creative digital content.',
    icon: Rocket,
    accent: 'border-amber-500/30 text-amber-400 bg-amber-950/40',
  },
  {
    title: 'Connect',
    description: 'Network with motivated peers across academic years and engineering disciplines, fostering strong peer mentorship.',
    icon: Users,
    accent: 'border-cyan-500/30 text-cyan-400 bg-cyan-950/40',
  },
  {
    title: 'Grow',
    description: 'Develop crucial leadership, communication, team coordination, and problem-solving skills outside the traditional classroom.',
    icon: Target,
    accent: 'border-blue-500/30 text-blue-400 bg-blue-950/40',
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 bg-[#0B1026]/60 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>ABOUT OUR COMMUNITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Driving Campus Innovation at GHRCEM
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            The <strong className="text-white">AWS Student Builder Group</strong> at <strong className="text-white">G. H. Raisoni College of Engineering & Management, Jalgaon</strong> is a student-driven technology community. We bring together ambitious students who are passionate about cloud computing, engineering, design, and collaborative leadership.
          </p>

          <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>GHRCEM Campus, Jalgaon, Maharashtra</span>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl p-6 bg-[#080D20] border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 ${pillar.accent}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
