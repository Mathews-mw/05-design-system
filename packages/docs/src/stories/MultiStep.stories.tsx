import { Meta, StoryObj } from '@storybook/react'
import { MultiStep, IMultiStepProps, Box } from '@mw-ignite-ui/react'

export default {
	title: 'Form/Multi Step',
	component: MultiStep,
	args: {
		size: 4,
		currentStep: 1,
	},
	decorators: [
		(Story) => {
			return (
				<Box
					as='label'
					css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
				>
					{Story()}
				</Box>
			)
		},
	],
} as Meta<IMultiStepProps>

export const Primary: StoryObj<IMultiStepProps> = {}

export const Full: StoryObj<IMultiStepProps> = {
	args: {
		currentStep: 4,
	},
}
