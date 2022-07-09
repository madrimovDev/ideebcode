import React from 'react'
import { Button, Flex, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

const ToggleTheme = () => {
	const { toggleColorMode } = useColorMode()
	const Icon = useColorModeValue(BsMoonFill, BsSunFill)
	return (
		<Flex as='button' justify='center' align='center' onClick={toggleColorMode}>
			<Icon />
		</Flex>
	)
}

export default ToggleTheme
