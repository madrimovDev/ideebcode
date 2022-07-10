import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Icon,
	IconButton,
	useColorMode,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import menuList from './menuList'
import ToggleTheme from './toggleTheme'

type MobileMenuPropsType = {
	isOpen: boolean
	onClose: () => void
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuPropsType) => {
	const { asPath } = useRouter()
	const { colorMode } = useColorMode()
	return (
		<Drawer size='xs' isOpen={isOpen} onClose={onClose}>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerHeader display='flex' justifyContent='space-between'>
					<ToggleTheme />
					<IconButton size='xs' onClick={onClose} aria-label='close-button'>
						<AiOutlineClose />
					</IconButton>
				</DrawerHeader>
				<Flex flexDir='column' px='4'>
					{menuList.map((link) => (
						<Link href={link.href} key={link.href}>
							<Flex
								as='button'
								align='center'
								gap='2'
								py='2'
								px='4'
								rounded='base'
								onClick={onClose}
								bg={
									asPath === (link.href === '/' ? '/' : '/' + link.href)
										? 'gray.600'
										: 'transparent'
								}
								color={
									colorMode === 'light'
										? asPath === (link.href === '/' ? '/' : '/' + link.href)
											? 'white'
											: 'black'
										: 'white'
								}>
								<Icon as={link.icon} />
								{link.name}
							</Flex>
						</Link>
					))}
				</Flex>
			</DrawerContent>
		</Drawer>
	)
}

export default MobileMenu
