import { Flex, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import Content from './content'
import Social from './social'

const SocialMedia = () => {
	const color = useColorModeValue('blackAlpha.50', 'whiteAlpha.400')
	return (
		<Flex
			as={motion.div}
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			viewport={{
				once: true,
				amount: 0.8,
			}}
			flexDir={['column', 'column', 'row']}
			justify='space-between'
			align='center'
			w='full'
			px={['10px', '10px', '20px', '100px']}
			py={['20px', '20px', '20px', '42px']}
			bg={color}
			shadow='lg'
			rounded='2xl'
			mb={['100px', '100px', '150px']}
			gap='4'>
			<Content />
			<Social />
		</Flex>
	)
}

export default SocialMedia
