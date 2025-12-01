import { motion } from "framer-motion";
import { ReactNode } from "react";

interface NumberedSectionProps {
  number: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

const NumberedSection = ({ number, title, children, className = "" }: NumberedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`relative ${className}`}
    >
      {/* Decorative Number */}
      <div className="decorative-number opacity-90 mb-4">
        {number}
      </div>
      
      {/* Title */}
      {title && (
        <h3 className="text-2xl lg:text-3xl font-serif font-semibold mb-4 text-foreground">
          {title}
        </h3>
      )}
      
      {/* Content */}
      <div className="text-foreground leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
};

export default NumberedSection;
