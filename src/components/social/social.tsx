import { Flex, Heading, useTheme } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import socialLinks from './socialLinks'

const Social = () => {
	const { colors } = useTheme()
	return (
		<Flex gap='10' wrap='wrap' justify='center' align='center'>
			{socialLinks.map((link) => (
				<Flex
					key={link.name}
					as={motion.div}
					whileHover={{
						scale: 1.1,
            color: colors.primary,
            transition: {
              duration: 0.05
            }
					}}
					cursor='pointer'
					w={[`26%`, '26%', 'initial']}
					flexDir='column'
					justify='center'
					align='center'>
					{<link.icon size='50px' />}
					{/* <Heading fontSize='2xl' fontWeight='normal'>
						{link.name}
					</Heading> */}
				</Flex>
			))}
		</Flex>
	)
}

export default Social
