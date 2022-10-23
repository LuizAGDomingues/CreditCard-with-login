import { Meta, StoryObj } from '@storybook/react'
import { Heading } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Create Account',
  },
  argTypes: {},
} as Meta

export const Default: StoryObj = {}