import { Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { RefObject } from 'react'
import Content from './content'
import Cube from './cube'
import Media from './media'

type ArticlePropsType = {
	refObj: RefObject<HTMLDivElement> | null
}

const Article = ({ refObj }: ArticlePropsType) => {
	return (
		<Flex
			as={motion.div}
			id=''
			pos='relative'
			animate={{
				transition: {
					delay: 1,
					delayChildren: 0.5,
					staggerChildren: 2,
				},
			}}
			mt={[0, '5', '10']}
			mb='150px'
			flexDir={['column-reverse', 'column-reverse', 'row']}
			ref={refObj}
			justify='center'
			align='center'>
			<Content />
			<Media />
			<Cube bottom='10px' left='40%' w='150px' />
			<Cube bottom='200px' left='50%' />
			<Cube bottom='350px' left='45%' w='80px' />
		</Flex>
	)
}

export default Article
