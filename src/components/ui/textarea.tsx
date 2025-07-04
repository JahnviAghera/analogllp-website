import React from 'react';

interface TextareaProps {
  placeholder?: string;
  className?: string;
}

const Textarea: React.FC<TextareaProps> = ({ placeholder, className }) => {
  return <textarea placeholder={placeholder} className={className} />;
};

export { Textarea };
