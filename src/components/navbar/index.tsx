import { Box, Flex, useDisclosure } from '@chakra-ui/react'
import React, { RefObject, useEffect, useRef, useState } from 'react'
import DesktopMenu from './desktopMenu'
import Logo from './logo'
import MobileMenu from './mobileMenu'
import ToggleMenu from './toggleMenu'

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<Flex name="home" justify='space-between' align='center' py='5'>
			<Logo />
			<ToggleMenu onOpen={onOpen} />
			<MobileMenu isOpen={isOpen} onClose={onClose} />
			<DesktopMenu />
		</Flex>
	)
}

export default Navbar
