import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story => {
        return (
            <div>
                {Story()}
                <Text
            </div>
        )
    })
  ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
