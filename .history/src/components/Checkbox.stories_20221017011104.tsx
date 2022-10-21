import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    children: 'Create Account',
  },
  argTypes: {},
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
