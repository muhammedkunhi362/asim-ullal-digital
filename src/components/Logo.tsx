import { Scale } from "lucide-react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Scale className={`w-10 h-10 ${className}`} />
  );
};

export default Logo;
