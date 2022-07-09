import { Button, IconButton } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

type ToggleMenuPropsType = {
	onOpen: () => void
}

const ToggleMenu = ({ onOpen }: ToggleMenuPropsType) => {
	return (
		<IconButton
			onClick={onOpen}
			display={['flex', 'flex', 'none']}
			size='sm'
			variant='outline'
			aria-label='toggle-button'>
			<AiOutlineMenu size='16px' />
		</IconButton>
	)
}

export default ToggleMenu
