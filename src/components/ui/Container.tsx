import { Children } from '@/types/main';

export const Container = ({ children, className }: Children) => {
  return <div className={`container ${className}`}>{children}</div>;
};
