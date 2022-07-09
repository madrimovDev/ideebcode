import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '../config/theme.config'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Component {...pageProps} />
			<ColorModeScript initialColorMode='dark' />
		</ChakraProvider>
	)
}

export default MyApp
