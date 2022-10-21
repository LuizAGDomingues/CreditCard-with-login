import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface CheckboxProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Checkbox({ children, asChild }: CheckboxProps) {
  const Comp = asChild ? Slot : 'Checkbox';
  return (
    <Comp className={clsx('py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
    )}>
      {children}
    </Comp>
  )
}
