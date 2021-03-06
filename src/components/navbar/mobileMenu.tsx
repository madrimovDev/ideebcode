import {
	Box,
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Icon,
	IconButton,
	useColorMode,
	useOutsideClick,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import menuList from './menuList'
import ToggleTheme from './toggleTheme'

type MobileMenuPropsType = {
	isOpen: boolean
	onClose: () => void
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuPropsType) => {
	const { asPath } = useRouter()
	const { colorMode } = useColorMode()
	const [activeHash, setActiveHash] = useState('home')

	const nav = useRef(null)
	useOutsideClick({
		ref: nav,
		handler: onClose,
	})

	const setActive = (to: string) => {
		setActiveHash(to)
	}

	return (
		<Box
			as={motion.div}
			ref={nav}
			initial={{
				x: '100%',
				opacity: 0,
			}}
			animate={{
				x: isOpen ? '0' : '100%',
				opacity: isOpen ? 1 : 0,
				transition: {
					type: 'tween',
				},
			}}
			display={['block', 'block', 'none']}
			maxW='xs'
			w='full'
			h='100vh'
			pos='fixed'
			bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
			right='0'
			top='0'
			zIndex='modal'
			shadow='2xl'
			p='4'>
			<Flex justify='space-between' align='center'>
				<ToggleTheme />
				<IconButton
					aria-label='close-button'
					onClick={onClose}
					size='xs'
					icon={<AiOutlineClose />}
				/>
			</Flex>

			<Flex flexDir='column' gap='2' mt='4'>
				{menuList.map((link) => (
					<Link
						width='100%'
						key={link.href}
						to={link.href}
						smooth
						saveHashHistory
						hashSpy
						offset={-80}
						onClick={() => {
							onClose()
							setActiveHash(link.href)
						}}
						spy
						activeClass={link.href}
						onSetActive={setActive}>
						<Flex
							align='center'
							py='2'
							px='5'
							fontSize='xl'
							gap='3'
							rounded='lg'
							color={activeHash === link.href ? 'white' : 'initial'}
							bg={activeHash === link.href ? 'gray.600' : ''}>
							{<link.icon />}
							{link.name}
						</Flex>
					</Link>
				))}
			</Flex>
		</Box>
	)
}

export default MobileMenu
