import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputInputProps, TextInputRootProps } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: (
      <TextInput.Input placeholder='Type your email' />
    ),
  },
  argTypes: {},
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}
