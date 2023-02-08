import React from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.HtmlHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  variant?: 'primary' | 'outline';
}

export const Button = ({ className, variant, children, ...rest }: Props) => {
  if (variant === 'primary')
    return (
      <button className={`btn-primary ${className}`} {...rest}>
        {children}
      </button>
    );

  if (variant === 'outline')
    return (
      <button className={`btn-outline ${className}`} {...rest}>
        {children}
      </button>
    );
  else
    return (
      <button className={`${className}`} {...rest}>
        {children}
      </button>
    );
};
