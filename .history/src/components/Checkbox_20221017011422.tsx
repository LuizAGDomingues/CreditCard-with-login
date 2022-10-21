import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckboxProps {}

export function Checkbox({}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root>
      <CheckboxPrimitive.Indicator asChild>
        <Check weight='bold' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
