import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children: string;
  asChild?: boolean;
}

export function Text({ size = 'md', children, as }: TextProps) {
  const Comp = 
  return (
    <span className={clsx('text-gray-100 font-sans', {
      'text-xs': size === 'sm',
      'text-sm': size === 'md',
      'text-md': size === 'lg',
    })}>
      {children}
    </span>
  )
}
