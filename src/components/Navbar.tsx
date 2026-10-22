import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { AwsLogo } from './AwsLogo';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Teams', href: '#teams' },
  { label: 'Why Join?', href: '#why-join' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = ['hero', 'about', 'teams', 'why-join', 'faq'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050816]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-2.5'
          : 'bg-[#050816]/60 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Side: GHRCEM Logo + AWS Student Builder Group */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 sm:gap-4 group focus:outline-none"
            aria-label="AWS Student Builder Group GHRCEM Home"
          >
            {/* College Logo container */}
            <div className="h-10 sm:h-11 px-2 py-1 bg-white rounded-lg flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-105">
              <img
                src="/ghrcem-logo.png"
                alt="G. H. Raisoni College of Engineering & Management, Jalgaon"
                className="h-full w-auto object-contain"
              />
            </div>

            {/* Subtle Divider */}
            <div className="hidden sm:block h-7 w-[1px] bg-white/20" />

            {/* AWS Student Builder Group Branding */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <AwsLogo size="sm" />
                <span className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                  Student Builder Group
                </span>
              </div>
              <span className="hidden sm:inline-block text-[11px] font-medium text-slate-400 tracking-wider uppercase">
                GHRCEM Jalgaon
              </span>
            </div>
          </a>

          {/* Right Side: Desktop Nav Links + Explore Teams CTA */}
          <nav className="hidden lg:flex items-center gap-1">
            <div className="flex items-center space-x-1 mr-4 bg-[#0B1026]/70 px-3 py-1.5 rounded-full border border-white/10">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-white/10 shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Orange Explore Teams CTA */}
            <a
              href="#teams"
              onClick={(e) => handleNavClick(e, '#teams')}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-[#FF9900] hover:from-amber-300 hover:to-orange-500 shadow-md shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-200 active:scale-95"
            >
              <span>Explore Teams</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#teams"
              onClick={(e) => handleNavClick(e, '#teams')}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-[#FF9900] shadow-sm"
            >
              <span>Teams</span>
              <ArrowRight className="w-3 h-3" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden animate-in fade-in slide-in-from-top-4 duration-200 bg-[#0B1026]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-amber-400 bg-amber-500/10 border border-amber-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-white/10">
              <a
                href="#teams"
                onClick={(e) => handleNavClick(e, '#teams')}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-[#FF9900] shadow-md shadow-orange-500/25 active:scale-95 transition-all"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Explore Teams & Apply</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
