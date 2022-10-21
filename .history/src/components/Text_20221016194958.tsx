interface TextProps {
  size?: 'sm' | 'md' | 'lg';
}

export function Text({size}: TextProps) {
  return (
  <span className='text-gray-100 font-sans'>Text</span>
  )
}
