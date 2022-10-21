import { InputHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputRoot() {
  return ()
}

function TextInputIcon {}

function TextInputInput(props: TextInputProps) {
  return (
    
      <input className={clsx('',)}
        {...props}
      />
    </div>
  )
}
