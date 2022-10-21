import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputInputProps } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput.Input,
  args: {
    placeholder: 'Type your email',
    type: 'email'
  },
  argTypes: {},
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {}
