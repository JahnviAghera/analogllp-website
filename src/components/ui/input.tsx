import React from 'react';

interface InputProps {
  placeholder?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, className }) => {
  return <input type="text" placeholder={placeholder} className={className} />;
};

export { Input };
