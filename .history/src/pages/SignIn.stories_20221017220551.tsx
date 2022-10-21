import { Meta, StoryObj } from '@storybook/react'
import { SignIn } from './SignIn';

export default {
  title: 'Pages/Sign In',
  component: SignIn,
  args: {
    children: 'Create Account',
  },
  argTypes: {},
} as Meta<SignInProps>

export const Default: StoryObj<SignInProps> = {}
