import { ReactNode } from 'react';
import { clsx } from 'clsx';

export interface TextInputProps {
}

export function TextInput({}: TextInputProps) {
  return (
    <input className={clsx(
        ''
    )} />
  )
}
