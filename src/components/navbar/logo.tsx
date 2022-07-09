import { Text, useBreakpoint } from '@chakra-ui/react'
import React from 'react'

const Logo = () => {
	return (
		<Text as='p' fontSize={['md', 'lg', 'xl']}>
			iDeep
			<Text fontWeight='semibold' as='span' color='primary'>
				Group
			</Text>
		</Text>
	)
}

export default Logo
