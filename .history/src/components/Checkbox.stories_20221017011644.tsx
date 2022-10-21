import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox';
import { Text } from './Text';

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
                <Text>Lembra</Text>
            </div>
        )
    })
  ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
