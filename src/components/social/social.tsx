import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import socialLinks from './socialLinks'

const Social = () => {
	return (
		<Flex gap='10' wrap="wrap" justify="center" align="center">
			{socialLinks.map((link) => (
				<Flex key={link.name} w={[`26%`, "26%", "initial"]} flexDir='column' justify='center' align='center'>
					{<link.icon size='50px' />}
					<Heading fontSize='2xl' fontWeight="normal">{link.name}</Heading>
				</Flex>
			))}
		</Flex>
	)
}

export default Social
