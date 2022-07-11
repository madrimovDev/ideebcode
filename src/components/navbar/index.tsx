import { Box, Flex, useDisclosure } from '@chakra-ui/react'
import React, { RefObject, useEffect, useRef, useState } from 'react'
import DesktopMenu from './desktopMenu'
import Logo from './logo'
import MobileMenu from './mobileMenu'
import ToggleMenu from './toggleMenu'

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<Flex
			pos={['fixed', 'fixed', 'static']}
			top='0'
			left='0'
			px='16px'
			w={['100%', '100%', 'auto']}
			as='div'
			bg={['Background', 'Background', 'initial']}
			zIndex={['overlay', 'overlay', 'initial']}
			shadow={['base']}
			justify='space-between'
			align='center'
			py={['3', '3', '5']}>
			<Logo />
			<ToggleMenu onOpen={onOpen} />
			<MobileMenu isOpen={isOpen} onClose={onClose} />
			<DesktopMenu />
		</Flex>
	)
}

export default Navbar
