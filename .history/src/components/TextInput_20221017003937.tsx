import { ReactNode } from 'react';
import { clsx } from 'clsx';

export interface TextInputProps extends InputHTML {
  placeholder?: string;
}

export function TextInput({ placeholder }: TextInputProps) {
  return (
    <input className={clsx(
        'py-4 px-3 rounded bg-gray-800 w-full text-gray-100 text-xs placeholder:text-gray-400',
      )} 
    />
  )
}
