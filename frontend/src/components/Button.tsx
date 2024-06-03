import React from 'react';

interface ButtonProps {
  color: string;
  onClick: () => void;
  title: string;
}

const Button: React.FC<ButtonProps> = ({ color, onClick, title }) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${color} p-2 rounded min-w-24 text-black`}
    >
      {title}
    </button>
  );
};

export default Button;
