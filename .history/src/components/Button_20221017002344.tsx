import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Text({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp className={clsx(
    )}>
      {children}
    </Comp>
  )
}
