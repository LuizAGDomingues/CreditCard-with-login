import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckboxProps {}

export function Checkbox({}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root>
      <CheckboxPrimitive.Indicator asChild>
        <Check weight='bold' className='h-5 w-5 text-c'/>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
