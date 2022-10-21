interface TextProps {
  size?: 'sm' | 'md' | 'lg';
}

export function Text({}: TextProps) {
  return (
  <span className='text-gray-100 font-sans'>Text</span>
  )
}
