import { Button, Flex, Input } from '@chakra-ui/react'
import React from 'react'

const Form = () => {
	return (
		<Flex
			as='form'
			minW={['full', 'full', 'lg', 'xl']}
			bg='whiteAlpha.400'
			p='14px'
			shadow='lg'
			rounded='xl'>
			<Input type='text' placeholder='Enter your email' variant='unstyled' />
			<Button type='submit' variant='unstyled' fontSize='sm' w='200px'>
				Subscribe now
			</Button>
		</Flex>
	)
}

export default Form
