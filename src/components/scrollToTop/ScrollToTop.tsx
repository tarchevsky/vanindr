import { useState, useEffect, FC } from 'react'
import { TbTent } from 'react-icons/tb'
import { motion } from 'framer-motion'

const ScrollToTop: FC = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false)

	const handleScroll = (): void => {
		if (window.scrollY > 300) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	const scrollToTop = (): void => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	useEffect((): (() => void) => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<motion.button
			onClick={scrollToTop}
			className='bg-primary'
			initial={{ opacity: 0, scale: 0 }}
			animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
			transition={{ duration: 0.3 }}
			style={{
				position: 'fixed',
				bottom: '20px',
				right: '20px',
				color: 'white',
				border: 'none',
				borderRadius: '50%',
				padding: '10px',
				cursor: 'pointer',
				boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
				display: isVisible ? 'block' : 'none' // Скрываем кнопку, если она не видима
			}}
		>
			<TbTent size={24} color='#fff' />
		</motion.button>
	)
}

export default ScrollToTop
