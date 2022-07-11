import { Flex, Text } from '@chakra-ui/react'
// import * as Scroll from "react-scroll"
import { useRouter } from 'next/router'
import React from 'react'
import { Link } from 'react-scroll'
import menuList from './menuList'
import ToggleTheme from './toggleTheme'

const DesktopMenu = () => {
	return (
		<Flex align='center' gap='8' display={['none', 'none', 'flex']}>
			{menuList.map((link) => (
				<Text
					key={link.href}
					transition='.3s'
					_hover={{ color: 'primary' }}
					cursor='pointer'>
					<Link hashSpy to={link.href} saveHashHistory smooth duration={800}>
						{link.name}
					</Link>
				</Text>
			))}
			<ToggleTheme />
		</Flex>
	)
}

export default DesktopMenu
