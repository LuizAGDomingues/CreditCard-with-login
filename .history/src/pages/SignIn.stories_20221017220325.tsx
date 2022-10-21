import { Meta, StoryObj } from '@storybook/react'
import { SignIn, SignInProps } from './SignIn';

export default {
  title: 'Components/SignIn',
  component: SignIn,
  args: {
    children: 'Create Account',
  },
  argTypes: {},
} as Meta<SignInProps>

export const Default: StoryObj<SignInProps> = {}
