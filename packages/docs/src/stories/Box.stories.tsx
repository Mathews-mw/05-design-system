import { Meta, StoryObj } from '@storybook/react'
import { Box, IBoxProps, Text } from '@mw-ignite-ui/react'

export default {
	title: 'Surfaces/Box',
	component: Box,

	args: {
		children: <Text>Teste do elemento Box</Text>,
	},
	argTypes: {
		children: {
			control: {
				type: null,
			},
		},
	},
} as Meta<IBoxProps>

export const Primary: StoryObj<IBoxProps> = {}
