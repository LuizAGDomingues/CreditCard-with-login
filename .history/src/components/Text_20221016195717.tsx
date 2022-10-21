import { clsx } from 'clsx';

interface TextProps {
  size?: 'sm' | 'md' | 'lg';
}

export function Text({ size = 'md' }: TextProps) {
  return (
    <span className={clsx('text-gray-100 font-sans', {
      'text-xs': size === 'sm',
    })}>
      Text
    </span>
  )
}
