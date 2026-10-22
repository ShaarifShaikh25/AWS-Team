import React from 'react';
import { ArrowRight, ChevronDown, Cloud, Code2, Lightbulb, Users, Terminal, Sparkles, BookOpen } from 'lucide-react';
import { AwsLogo } from './AwsLogo';

export const HeroSection: React.FC = () => {
  const scrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
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
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden flex items-center bg-[#050816]"
    >
      {/* Background ambient radial gradients & circuit dot grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1026] border border-white/10 text-xs font-semibold text-amber-300 shadow-sm mb-6 hover:border-amber-500/40 transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#FF9900] animate-pulse" />
              <span>STUDENT COMMUNITY • GHRCEM JALGAON</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-3">
              Build. Learn. Lead.
            </h1>

            {/* Second Heading / Highlighted Line */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-amber-400 via-orange-400 to-[#FF9900] bg-clip-text text-transparent">
              Join the Core Team 2026
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              Be part of the AWS Student Builder Group at GHRCEM. Collaborate with passionate students, build practical skills, organize impactful initiatives, and help grow the campus tech community.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                onClick={() => scrollTo('teams')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-[#FF9900] to-orange-500 hover:from-amber-300 hover:to-orange-400 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-200 active:scale-95 group cursor-pointer"
              >
                <span>Explore Teams</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => scrollTo('why-join')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-[#0B1026]/80 hover:bg-[#0B1026] border border-white/15 hover:border-white/30 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Why Join Us</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </button>
            </div>

            {/* Subtle campus trust metrics */}
            <div className="pt-8 mt-8 border-t border-white/10 flex items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Recruitment Open for 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>5 Core Teams</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span>GHRCEM Campus</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visually Rich Tech Illustration */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Outer Decorative Glow Ring */}
            <div className="absolute w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] rounded-full border border-purple-500/15 pointer-events-none animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] rounded-full border border-dashed border-cyan-500/20 pointer-events-none" />

            {/* Main Central Card Mockup (Laptop / Terminal Device) */}
            <div className="relative w-full max-w-lg z-20">
              
              {/* Floating Top Badge: "Students Build Tomorrow" */}
              <div className="absolute -top-7 -right-2 sm:-right-4 z-30 px-3.5 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs shadow-lg transform rotate-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-slate-900" />
                <span>Students Build tomorrow</span>
              </div>

              {/* Floating Left Tag: Code </> */}
              <div className="absolute -top-4 -left-4 sm:-left-6 z-30 p-2.5 rounded-xl bg-purple-900/90 border border-purple-500/50 shadow-xl shadow-purple-950/60 text-purple-300 transform -rotate-6">
                <Code2 className="w-5 h-5 text-purple-300" />
              </div>

              {/* Laptop Screen Body */}
              <div className="rounded-2xl bg-[#090D22] border-2 border-white/15 p-4 sm:p-5 shadow-2xl backdrop-blur-xl">
                {/* Laptop Header Bar */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] text-slate-400 font-mono">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    <span>ghrcem.aws.builders/portal</span>
                  </div>
                  <div className="w-8" />
                </div>

                {/* Screen Content: AWS Builder Center Display */}
                <div className="rounded-xl bg-gradient-to-br from-[#060A1D] to-[#101736] p-6 border border-white/5 flex flex-col items-center text-center relative overflow-hidden">
                  
                  {/* Subtle AWS Cloud Grid */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

                  {/* Prominent AWS Logo */}
                  <div className="mb-3 transform scale-110">
                    <AwsLogo size="lg" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    Student Builder Group
                  </h3>
                  <p className="text-xs text-slate-400 mb-5">
                    G. H. Raisoni College of Engineering & Management, Jalgaon
                  </p>

                  {/* 4 Interactive Feature Badges */}
                  <div className="grid grid-cols-2 gap-2.5 w-full max-w-xs mb-4">
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10 text-left">
                      <Cloud className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="text-[11px] font-medium text-slate-200">Cloud Tech</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10 text-left">
                      <Code2 className="w-4 h-4 text-purple-400 shrink-0" />
                      <span className="text-[11px] font-medium text-slate-200">Workshops</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10 text-left">
                      <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="text-[11px] font-medium text-slate-200">Innovation</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10 text-left">
                      <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-[11px] font-medium text-slate-200">Community</span>
                    </div>
                  </div>

                  {/* Terminal code snippet indicator */}
                  <div className="w-full text-left font-mono text-[10px] text-slate-400 bg-black/40 px-3 py-2 rounded-md border border-white/5">
                    <span className="text-emerald-400">$</span> aws-ghrcem --join-team 2026<br />
                    <span className="text-slate-500">→ Initializing builders network... Ready!</span>
                  </div>
                </div>

                {/* Laptop Base Stand Hint */}
                <div className="mt-3 flex justify-center">
                  <div className="w-24 h-1 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Floating Bottom Card: Stack of Books / Pillars */}
              <div className="absolute -bottom-6 -left-3 sm:-left-6 z-30 p-3 rounded-xl bg-[#0B1026] border border-cyan-500/30 shadow-xl shadow-cyan-950/40 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="flex flex-col text-left">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-cyan-300">CORE PILLARS</div>
                  <div className="text-xs font-semibold text-white">LEARN • BUILD • CONNECT • GROW</div>
                </div>
              </div>

              {/* Floating Bottom Right Note: "Different Skills · Same Goal" */}
              <div className="absolute -bottom-7 -right-2 sm:-right-4 z-30 px-3.5 py-1.5 rounded-lg bg-[#0F172A] border border-amber-500/40 shadow-xl text-left hidden sm:block">
                <span className="text-[11px] font-medium text-amber-300">
                  ⚡ Different Skills • Same Goal • Bigger Impact
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
