import React, { useEffect, useState } from 'react'
import { Text } from '@chakra-ui/react'
import Link from 'next/link'
import { IoIosArrowUp } from 'react-icons/io'

const FloatButtun = () => {
	const [hidden, setHidden] = useState(true)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.onscroll = () => {
				if (window.scrollY > 300) {
					setHidden(false)
				} else {
					setHidden(true)
				}
			}
		}
	}, [])

	return (
		<Link href='/'>
			<Text
				pos='fixed'
				bottom={['8', '10', '16']}
				right={['4', '10', '16']}
				as='button'
				bg='blackAlpha.400'
				w='10'
				h='10'
				display={hidden ? 'none' : 'flex'}
				justifyContent='center'
				alignItems='center'
				rounded='full'
				_hover={{
					color: 'primary',
				}}>
				<IoIosArrowUp />
			</Text>
		</Link>
	)
}

export default FloatButtun
