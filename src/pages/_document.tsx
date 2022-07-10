import { ColorModeScript } from '@chakra-ui/react'
import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

const Document = () => {
	return (
		<Html lang='en'>
			<Head />
			<body>
        <ColorModeScript initialColorMode="dark" />
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document
