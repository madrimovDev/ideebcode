import { Flex, Grid, GridItem, Heading, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import Services from '.'
import serviceList from './serviceList'

const ServicesList = () => {
	return (
		<Grid
			gridTemplateColumns={[
				'repeat(1. 1fr)',
				'repeat(2, 1fr)',
				'repeat(3, 1fr)',
			]}
			gap={['10px', '20px', '20px', '40px']}
			placeItems='center'
			w={['100%', '100%', '55%', '55%']}
			as={motion.div}>
			{serviceList.map((service) => (
				<GridItem
					key={service.name}
					w='full'
					as={motion.div}
					initial={{
						scale: 0.9,
						opacity: 0,
					}}
					whileInView={{
						scale: 1,
						opacity: 1,
						transition: {
							delay: service.delay / 8,
							scale: {
								type: 'spring',
								bounce: 0.6,
							},
						},
					}}
					viewport={{
						once: true,
						amount: 0.8,
					}}>
					<Flex
						flexDir='column'
						justify='center'
						align='center'
						textAlign='center'
						gap='4'
						bg='whiteAlpha.400'
						p={['4', '6', '6', '6']}
						rounded='2xl'>
						<Flex fontSize={['3xl', '3xl', '4xl', '6xl']}>
							{<service.icon fontSize='inherit' />}
						</Flex>
						<Heading as='h6' fontSize='xl'>
							{service.name}
						</Heading>
					</Flex>
				</GridItem>
			))}
		</Grid>
	)
}

export default ServicesList
