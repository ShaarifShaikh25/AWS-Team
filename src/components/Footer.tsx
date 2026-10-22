import React from 'react';
import { AwsLogo } from './AwsLogo';
import { MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
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
    <footer className="relative bg-[#040612] border-t border-white/10 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (col 1-6) */}
          <div className="md:col-span-6 flex flex-col items-start space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              {/* College Logo container */}
              <div className="h-11 px-2.5 py-1.5 bg-white rounded-lg flex items-center justify-center shadow-md">
                <img
                  src="/ghrcem-logo.png"
                  alt="G. H. Raisoni College of Engineering & Management, Jalgaon"
                  className="h-full w-auto object-contain"
                />
              </div>

              {/* AWS Smile & Name */}
              <div className="flex items-center gap-1.5 pl-2 border-l border-white/20">
                <AwsLogo size="md" />
                <span className="font-bold text-white text-base">
                  Student Builder Group
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              <strong>G. H. Raisoni College of Engineering & Management, Jalgaon</strong>
              <br />
              An active campus community supporting student learning, cloud technical exploration, and collaborative leadership.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Gat No. 57/1, Shirsoli Road, Mohadi, Jalgaon, Maharashtra 425002</span>
            </div>
          </div>

          {/* Quick Links (col 7-9) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('hero')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('about')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('teams')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Teams
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('why-join')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Why Join?
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('faq')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Tagline & Pillar Focus (col 10-12) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Core Community Creed
            </h4>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="text-sm font-semibold text-amber-400 mb-1">
                Learn · Build · Connect · Grow
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Empowering students with practical cloud experiences and real campus initiatives.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 AWS Student Builder Group • G. H. Raisoni College of Engineering & Management, Jalgaon. All rights reserved.
          </div>
          <div>
            Recruitment Portal 2026
          </div>
        </div>

      </div>
    </footer>
  );
};
