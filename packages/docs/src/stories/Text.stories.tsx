import { Meta, StoryObj } from '@storybook/react'
import { Text, ITextProps } from '@mw-ignite-ui/react'

export default {
	title: 'Typography/Text',
	component: Text,
	args: {
		children:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis itaque dolorum et quae cupiditate incidunt vero explicabo ut distinctio cumque dicta quasi impedit, suscipit molestias, rem accusamus iste dignissimos! Beatae.',
		size: 'md',
	},
	argTypes: {
		size: {
			options: [
				'xxs',
				'xs',
				'sm',
				'md',
				'lg',
				'xl',
				'2xl',
				'4xl',
				'5xl',
				'6xl',
				'7xl',
				'8xl',
				'9xl',
			],
			control: {
				type: 'inline-radio',
			},
		},
	},
} as Meta<ITextProps>

export const Primary: StoryObj<ITextProps> = {}

export const CustomTag: StoryObj<ITextProps> = {
	args: {
		children: 'Strong Text',
		as: 'strong',
	},
}
