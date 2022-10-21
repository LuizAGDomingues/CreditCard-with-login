import { InputHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';


interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputProps) {
  return (
    <div className='py-4 px-3 rounded bg-gray-800 w-full outline-none text-gray-100 text-xs placeholder:text-gray-400 focus:ring-2 ring-cyan-300'>
      {props.children}
    </div>
  )
}

//function TextInputIcon {}

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputProps) {
  return (
    <input className='bg-transparent'
      {...props}
    />
  )
}
