import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}

export function Heading({ size = 'md', children, asChild }: HeadingProps) {
  const Comp = asChild ? Slot : 'h2';
  return (
    <Comp className={clsx('text-gray-100 font-bold font-sans', {
      'text-xs': size === 'sm',
      'text-sm': size === 'md',
      'text-md': size === 'lg',
    })}>
      {children}
    </Comp>
  )
}
