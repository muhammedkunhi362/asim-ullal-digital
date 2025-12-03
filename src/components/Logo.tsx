const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <svg 
      className={className} 
      width="40" 
      height="40" 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Scales of Justice Logo - matching reference design */}
      
      {/* Top decorative flame/leaf ornament */}
      <path 
        d="M50 4 C50 4 46 10 46 14 C46 17 48 19 50 19 C52 19 54 17 54 14 C54 10 50 4 50 4Z" 
        fill="currentColor"
      />
      
      {/* Left curved arm */}
      <path 
        d="M50 19 Q35 22 22 32" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Right curved arm */}
      <path 
        d="M50 19 Q65 22 78 32" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Decorative circles at arm ends */}
      <circle cx="22" cy="32" r="3" fill="currentColor"/>
      <circle cx="78" cy="32" r="3" fill="currentColor"/>
      
      {/* Small decorative circles on arms */}
      <circle cx="36" cy="24" r="2" fill="currentColor"/>
      <circle cx="64" cy="24" r="2" fill="currentColor"/>
      
      {/* Left chain/rope */}
      <line x1="22" y1="35" x2="22" y2="42" stroke="currentColor" strokeWidth="2"/>
      
      {/* Right chain/rope */}
      <line x1="78" y1="35" x2="78" y2="42" stroke="currentColor" strokeWidth="2"/>
      
      {/* Left scale pan - triangle */}
      <path 
        d="M10 44 L22 44 L34 44 L22 60 Z" 
        fill="currentColor"
      />
      
      {/* Right scale pan - triangle */}
      <path 
        d="M66 44 L78 44 L90 44 L78 60 Z" 
        fill="currentColor"
      />
      
      {/* Central pillar */}
      <rect x="47" y="19" width="6" height="58" fill="currentColor"/>
      
      {/* Base platform */}
      <path 
        d="M35 77 L65 77 L60 85 L40 85 Z" 
        fill="currentColor"
      />
      
      {/* Base bottom */}
      <rect x="38" y="85" width="24" height="4" rx="1" fill="currentColor"/>
      
      {/* Shield at bottom right */}
      <path 
        d="M72 70 L72 82 Q72 90 80 90 Q88 90 88 82 L88 70 L80 68 Z" 
        fill="currentColor"
      />
    </svg>
  );
};

export default Logo;
