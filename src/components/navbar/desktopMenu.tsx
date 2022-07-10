import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import menuList from './menuList'
import ToggleTheme from './toggleTheme'

const DesktopMenu = () => {
	return (
		<Flex align='center' gap='8' display={['none', 'none', 'flex']}>
			{menuList.map((link) => (
				<Text key={link.href} transition='.3s' _hover={{ color: 'primary' }}>
					<Link href={link.href}>{link.name}</Link>
				</Text>
			))}
			<ToggleTheme />
		</Flex>
	)
}

export default DesktopMenu
