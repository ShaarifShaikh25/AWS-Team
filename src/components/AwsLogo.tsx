import React from 'react';

interface AwsLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const AwsLogo: React.FC<AwsLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = false,
}) => {
  const heights = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-11',
  };

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Authentic AWS style typographic mark with signature orange smile curve */}
      <div className={`relative flex flex-col items-center justify-center ${heights[size]}`}>
        <svg
          viewBox="0 0 100 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto"
          aria-label="AWS Logo"
        >
          {/* "aws" text in lowercase bold */}
          <text
            x="50"
            y="26"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="26"
            letterSpacing="-0.5px"
          >
            aws
          </text>
          {/* Signature orange smile arrow */}
          <path
            d="M26 34 C44 42, 60 41, 76 34"
            stroke="#FF9900"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M72 32 L78 35 L76 39"
            fill="#FF9900"
            stroke="#FF9900"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {showSubtitle && (
        <div className="flex flex-col text-left leading-tight">
          <span className="text-sm font-bold tracking-tight text-white">
            Student Builder Group
          </span>
          <span className="text-[10px] font-medium tracking-wider text-slate-400 uppercase">
            GHRCEM Jalgaon
          </span>
        </div>
      )}
    </div>
  );
};
