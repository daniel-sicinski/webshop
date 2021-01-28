import React from 'react';

interface ButtonProps {
  classNames: string[];
  onClick: () => void;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  classNames,
  onClick
}) => {
  return (
    <button className={['button', ...classNames].join(' ')} onClick={onClick}>
      {children}
    </button>
  );
};
