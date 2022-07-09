import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Content = () => {
	return (
		<Box w={['full', 'full', '300px']} textAlign='center'>
			<Heading as='h4' fontSize='2xl'>
				Newsletter
			</Heading>
			<Text fontSize='md' color='gray.400' mt='1.5'>
				Mauris aliquet egestas metus, id pellentesque mauris tincidunt.
			</Text>
		</Box>
	)
}

export default Content
