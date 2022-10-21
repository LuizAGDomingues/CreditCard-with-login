import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputInputProps, Text } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    placeholder: 'Type your email',
    type: 'email'
  },
  argTypes: {},
} as Meta<TextInputInputProps>

export const Default: StoryObj<TextInputInputProps> = {}
