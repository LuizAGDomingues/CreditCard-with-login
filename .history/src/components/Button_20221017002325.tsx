import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Text({ children, asChild }: TextProps) {
  const Comp = asChild ? Slot : 'span';
  return (
    <Comp className={clsx('
    })}>
      {children}
    </Comp>
  )
}
