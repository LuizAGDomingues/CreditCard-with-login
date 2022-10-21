import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem Ips',
  },
} as Meta<TextProps>

export const Default: StoryObj<T> = {}
export const Small: StoryObj<T> = {
  args: {
    size: 'sm',
  }
}
export const Large: StoryObj<T> = {
  args: {
    size: 'lg',
  }
}
