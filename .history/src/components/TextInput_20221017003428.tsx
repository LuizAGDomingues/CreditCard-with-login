import { ReactNode } from 'react';
import { clsx } from 'clsx';

export interface TextInputProps {
}

export function TextInput({}: TextInputProps) {
  return (
    <input className={clsx(
      'py-4 px-3 rounded bg-gray-800 text-gray-100 ',
    )} />
  )
}
