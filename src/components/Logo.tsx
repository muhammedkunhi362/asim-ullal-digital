const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <svg 
      className={className} 
      width="40" 
      height="40" 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Modern minimalist law logo - scales of justice with geometric design */}
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>
      
      {/* Central pillar */}
      <rect x="18.5" y="12" width="3" height="16" fill="currentColor" rx="1.5"/>
      
      {/* Left scale plate */}
      <path 
        d="M8 18 L8 20 L16 20 L16 18 Z" 
        fill="currentColor"
      />
      <line x1="12" y1="18" x2="12" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      
      {/* Right scale plate */}
      <path 
        d="M24 18 L24 20 L32 20 L32 18 Z" 
        fill="currentColor"
      />
      <line x1="28" y1="18" x2="28" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      
      {/* Balance beam */}
      <line x1="12" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      
      {/* Base */}
      <rect x="15" y="28" width="10" height="2" fill="currentColor" rx="1"/>
    </svg>
  );
};

export default Logo;
