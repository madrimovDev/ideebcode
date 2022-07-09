import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { RefObject } from 'react'

const useHashRouter = (elements: RefObject<HTMLDivElement>[]) => {
	const router = useRouter()

	let currentHash = '/'

	useEffect(() => {
		if (window) {
			window.onscroll = () => {
				elements.forEach((element) => {
					const distance = window.scrollY - element.current?.offsetTop!
					const hash = toHash(element.current?.id!)
					if (distance < 30 && distance > -30 && currentHash != hash) {
						router.push(hash)
						currentHash = hash
					}
				})
			}
		}
	}, [])
}

const toHash = (path: string) => (path === '' ? '/' : '#' + path)

export default useHashRouter
