import { Flex } from '@chakra-ui/react'
import React, { RefObject } from 'react'
import Media from './media'
import ServicesList from './services'

type ServicesPropsType = {
	refObj: RefObject<HTMLDivElement> | null
}

const Services = ({ refObj }: ServicesPropsType) => {
	return (
		<Flex
			flexDir={['column', 'column', 'row']}
			mb={['100px', '100px', '150px']}
			ref={refObj}
			justify='space-between'
			align='center'
			gap={['10', '10', '0']}>
			<ServicesList />
			<Media />
		</Flex>
	)
}

export default Services
