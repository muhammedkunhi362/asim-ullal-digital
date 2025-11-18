interface DiacriticOrnamentProps {
  className?: string;
  variant?: 'dot' | 'curl' | 'accent';
}

const DiacriticOrnament = ({ className = "", variant = 'dot' }: DiacriticOrnamentProps) => {
  if (variant === 'curl') {
    return (
      <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C12 2 8 6 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 6 12 2 12 2Z" 
              fill="currentColor" opacity="0.15"/>
        <path d="M12 14C12 14 9 16 9 19C9 20.6569 10.3431 22 12 22C13.6569 22 15 20.6569 15 19C15 16 12 14 12 14Z" 
              fill="currentColor" opacity="0.3"/>
      </svg>
    );
  }

  if (variant === 'accent') {
    return (
      <svg className={className} width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 6C6 2 10 2 14 4C18 6 22 6 26 4C28 3 30 2 30 2" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
              opacity="0.4"/>
      </svg>
    );
  }

  // Default: dot variant
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="3" fill="currentColor" opacity="0.2"/>
      <circle cx="8" cy="8" r="1.5" fill="currentColor" opacity="0.6"/>
    </svg>
  );
};

export default DiacriticOrnament;
