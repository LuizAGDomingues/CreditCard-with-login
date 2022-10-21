import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem Ips',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      },
    },
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}
export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',
  },
}
export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg',
  },
}
export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Hello world</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
