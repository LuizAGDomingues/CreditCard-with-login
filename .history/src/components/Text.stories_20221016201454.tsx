import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem Ips',
  },
} as Meta<TextProps>

export const Default: StoryObj = {}
export const Small: StoryObj = {
  args
}
export const Large: StoryObj = {}
