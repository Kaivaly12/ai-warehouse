
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`
        bg-white/10 dark:bg-dark-secondary/60 
        backdrop-blur-xl
        border border-white/20 dark:border-dark-border
        rounded-2xl 
        shadow-lg
        p-6
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
