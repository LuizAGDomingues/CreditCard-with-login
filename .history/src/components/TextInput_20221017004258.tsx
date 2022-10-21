import { InputHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInput(props: TextInputProps) {
  return (
    <div>
      <input className={clsx(
          'py-4 px-3 rounded bg-gray-800 w-full outline-none text-gray-100 text-xs placeholder:text-gray-400 focus:ring-2 ring-cyan-300',
        )}
        {...props}
      />
    </div>
  )
}
