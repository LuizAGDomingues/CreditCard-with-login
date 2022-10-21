interface TextProps {
  size?: 'sm' | 'md' | 'lg';
}

export function Text(props: TextProps) {
  return (
  <span className='text-gray-100 font-sans'>Text</span>
  )
}
