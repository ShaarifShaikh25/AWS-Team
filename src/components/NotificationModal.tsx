import React, { useEffect } from 'react';
import { X, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import type { TeamItem } from '../types';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  team: TeamItem | null;
}

export const NotificationModal: React.FC<NotificationModalProps> = ({
  isOpen,
  onClose,
  team,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !team) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-[#0B1026] border border-white/10 p-6 md:p-8 shadow-2xl overflow-hidden"
        style={{
          boxShadow: `0 0 40px -10px ${team.accentHex}40`,
        }}
      >
        {/* Glow ambient background */}
        <div
          className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ backgroundColor: team.accentHex }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-300">
            <Clock className="w-3.5 h-3.5" />
            Recruitment Notice
          </span>
          <span className="text-xs text-slate-400">• GHRCEM Jalgaon</span>
        </div>

        {/* Title */}
        <h3 id="modal-title" className="text-xl md:text-2xl font-bold text-white mb-2">
          {team.name} Application
        </h3>

        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-sm mb-5 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-white">Application link coming soon!</p>
            <p className="text-xs text-slate-300 mt-0.5">
              The Google Form for the <strong className="text-amber-300">{team.name}</strong> will be opened shortly. Please check back soon or watch the community channels.
            </p>
          </div>
        </div>

        {/* Tips to prepare */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            What you can prepare in advance:
          </h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Review the team focus: <strong className="text-white">{team.tags.join(' · ')}</strong></span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Update your resume, GitHub link, or design portfolio</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Think about why you want to contribute to the AWS Student Builder Group at GHRCEM</span>
            </li>
          </ul>
        </div>

        {/* Action Button */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-medium text-sm text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-all hover:border-white/20 active:scale-95"
          >
            Got It, Thanks!
          </button>
        </div>
      </div>
    </div>
  );
};
