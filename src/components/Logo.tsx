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
      {/* Scales of Justice Logo */}
      
      {/* Top decorative flame/leaf */}
      <path 
        d="M20 2 C20 2 18 5 18 7 C18 8.5 19 9.5 20 9.5 C21 9.5 22 8.5 22 7 C22 5 20 2 20 2Z" 
        fill="currentColor"
      />
      
      {/* Balance beam - curved */}
      <path 
        d="M6 14 Q13 11 20 12 Q27 11 34 14" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Central pillar from beam */}
      <line x1="20" y1="9.5" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      
      {/* Left chain */}
      <line x1="8" y1="14" x2="8" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      
      {/* Right chain */}
      <line x1="32" y1="14" x2="32" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      
      {/* Left scale pan - triangle */}
      <path 
        d="M3 20 L8 20 L13 20 L8 28 Z" 
        fill="currentColor"
      />
      
      {/* Right scale pan - triangle */}
      <path 
        d="M27 20 L32 20 L37 20 L32 28 Z" 
        fill="currentColor"
      />
      
      {/* Central pillar */}
      <rect x="18.5" y="12" width="3" height="20" fill="currentColor" rx="1"/>
      
      {/* Base */}
      <path 
        d="M13 32 L20 32 L27 32 L25 36 L15 36 Z" 
        fill="currentColor"
      />
      
      {/* Shield bottom right */}
      <path 
        d="M30 30 L30 35 Q30 38 33 38 Q36 38 36 35 L36 30 Z" 
        fill="currentColor"
      />
    </svg>
  );
};

export default Logo;
