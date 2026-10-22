/**
 * Centralized Google Form URLs configuration for AWS Student Builder Group Recruitment 2026.
 * 
 * Replace the placeholder strings below with the respective Google Form URLs.
 * Example: 'https://docs.google.com/forms/d/e/.../viewform'
 */
export const TEAM_FORM_LINKS = {
  // Technical Team: Cloud learning, workshops, and hands-on projects
  technical: 'https://forms.gle/B6KYNcmsg2Fi678w9',

  // Content & Design Team: Visuals, educational materials, and creatives
  contentDesign: 'https://forms.gle/6U6yR7aq9rioiNhRA',

  // Marketing & Outreach Team: Outreach campaigns, event promotions, and partnerships
  marketingOutreach: 'https://forms.gle/aSr6LKkmEfhXgxjY7',

  // Community & Engagement Team: Student onboarding, discussions, and networking
  communityEngagement: 'https://forms.gle/5S3bxkBZm8iSb1zj7',

  // Events & Operations Team: Workshops logistics, volunteer coordination, and execution
  eventsOperations: 'https://forms.gle/itXbrmxG9cMYukJN8',
} as const;

export type TeamKey = keyof typeof TEAM_FORM_LINKS;

/**
 * Checks whether a form URL has been configured with an actual valid external URL.
 * Returns false if it's still a placeholder or empty.
 */
export function isFormUrlConfigured(url: string | undefined): boolean {
  if (!url) return false;
  const trimmed = url.trim();
  if (trimmed === '' || trimmed.startsWith('PASTE_')) return false;
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}
