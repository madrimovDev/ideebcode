import '../styles/globals.css'
import type { AppProps } from 'next/app'
import theme from '../config/theme.config'
import { Chakra } from '../config/chakra'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Chakra cookies={pageProps.cookies}>
			<Component {...pageProps} />
		</Chakra>
	)
}

export default MyApp

export { getServerSideProps } from '../config/chakra'
