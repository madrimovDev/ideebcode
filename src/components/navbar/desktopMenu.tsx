import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import menuList from './menuList'

const DesktopMenu = () => {
	const { asPath } = useRouter()
	return (
		<Flex align='center' gap='8' display={['none', 'none', 'flex']}>
			{menuList.map((link) => (
				<Text key={link.href} transition='.3s' _hover={{ color: 'primary' }}>
					<Link href={link.href}>{link.name}</Link>
				</Text>
			))}
		</Flex>
	)
}

export default DesktopMenu
