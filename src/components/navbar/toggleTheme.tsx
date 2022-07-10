import React from 'react'
import {
	Flex,
	IconButton,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

const ToggleTheme = () => {
	const { toggleColorMode } = useColorMode()
	const Icon = useColorModeValue(BsMoonFill, BsSunFill)
	return (
		<IconButton aria-label='toggle-theme' size="xs" fontSize='xs' onClick={toggleColorMode}>
			<Icon />
		</IconButton>
	)
}

export default ToggleTheme
