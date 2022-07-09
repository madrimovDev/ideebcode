import {
	Drawer,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Icon
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import menuList from './menuList'

type MobileMenuPropsType = {
	isOpen: boolean
	onClose: () => void
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuPropsType) => {
	const { asPath } = useRouter()
	return (
		<Drawer size='xs' isOpen={isOpen} onClose={onClose}>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader />
				<Flex flexDir='column' px='4'>
					{menuList.map((link) => (
						<Link href={link.href} key={link.href}>
							<Flex
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
