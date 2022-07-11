import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import { useRef } from 'react'
import Article from '../components/home'
import Navbar from '../components/navbar'
import NewLetter from '../components/newLetter'
import FloatButtun from '../components/other/floatButton'
import Services from '../components/services'
import SocialMedia from '../components/social'
import useHashRouter from '../hooks/useHashRouter'

const Home = () => {
	const homeRef = useRef(null)
	const serviceRef = useRef(null)
	const projectRef = useRef(null)

	// useHashRouter([homeRef, serviceRef, projectRef])

	return (
		<>
			<Head>
				<title>IDeap Group</title>
			</Head>
			<Container maxW='container.xl'>
				<Box pb={['100px', '100px', '150px']} id='home'>
					<Navbar />
					<Article refObj={homeRef} />
					<NewLetter />
				</Box>
				<Box pb={['100px', '100px', '150px']} id='ourservices'>
					<Services refObj={serviceRef} />
					<SocialMedia />
					{/* <FloatButtun /> */}
				</Box>
			</Container>
		</>
	)
}

export default Home
