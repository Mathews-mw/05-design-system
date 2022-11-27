import { Meta, StoryObj } from '@storybook/react'
import { Button, TButtonProps } from '@ignite-ui/react'

export default {
	title: 'Form/Button',
	component: Button,

	args: {
		childre: 'Enviar',
	},
} as Meta<TButtonProps>

export const Primary: StoryObj<TButtonProps> = {}

export const Big: StoryObj<TButtonProps> = {
	args: {
		size: 'big',
	},
}