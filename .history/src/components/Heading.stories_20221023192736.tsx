import { Meta, StoryObj } from '@storybook/react'
import { Heading } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Create Account',
  },
  argTypes: {},
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}