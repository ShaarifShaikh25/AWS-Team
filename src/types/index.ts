import type { TeamKey } from '../config/teamLinks';


export type TeamAccent = 'purple' | 'magenta' | 'orange' | 'teal' | 'blue';

export interface TeamItem {
  id: string;
  name: string;
  roleKey: TeamKey;
  iconName: 'Cpu' | 'Palette' | 'Megaphone' | 'UsersRound' | 'CalendarDays';
  description: string;
  tags: string[];
  accent: TeamAccent;
  accentHex: string;
  accentGradient: string;
  tagBg: string;
  tagText: string;
  badgeBorder: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Sparkles' | 'Users' | 'TrendingUp' | 'Briefcase' | 'Award';
  accentColor: string;
}

export interface StepItem {
  step: number;
  title: string;
  description: string;
  iconName: 'Search' | 'FileText' | 'UserCheck';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}
