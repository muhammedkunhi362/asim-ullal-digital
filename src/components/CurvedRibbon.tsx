interface CurvedRibbonProps {
  className?: string;
}

const CurvedRibbon = ({ className = "" }: CurvedRibbonProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg 
        className="w-full h-24" 
        viewBox="0 0 1200 100" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M0,50 Q300,10 600,50 T1200,50 L1200,100 L0,100 Z" 
          className="fill-accent/30"
        />
        <path 
          d="M0,60 Q300,20 600,60 T1200,60" 
          className="stroke-accent"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Decorative micro-text pattern */}
        <text 
          x="100" 
          y="45" 
          className="fill-accent/40" 
          fontSize="10" 
          fontFamily="Playfair Display"
        >
          ⚖ · ✦ · ⚖ · ✦ · ⚖ · ✦ · ⚖ · ✦
        </text>
        <text 
          x="600" 
          y="45" 
          className="fill-accent/40" 
          fontSize="10" 
          fontFamily="Playfair Display"
        >
          ⚖ · ✦ · ⚖ · ✦ · ⚖ · ✦ · ⚖ · ✦
        </text>
      </svg>
    </div>
  );
};

export default CurvedRibbon;
