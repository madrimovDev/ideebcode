import { Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import Content from './content'
import Form from './form'

const NewLetter = () => {
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
			bg='whiteAlpha.400'
			rounded='2xl'
			mb='150px'
			gap='4'>
			<Content />
			<Form />
		</Flex>
	)
}

export default NewLetter
