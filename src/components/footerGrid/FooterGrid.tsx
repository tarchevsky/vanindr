import Image from 'next/image'

const FooterGrid = () => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mb-10'>
			<Image
				src='/footer-grid-1.png'
				width={500}
				height={320}
				alt='Картинка 1'
				className='object-cover h-full w-full'
			/>
			<Image
				src='/footer-grid-2.png'
				width={500}
				height={320}
				alt='Картинка 1'
				className='object-cover h-full w-full'
			/>
			<Image
				src='/footer-grid-3.png'
				width={500}
				height={320}
				alt='Картинка 1'
				className='object-cover h-full w-full'
			/>
			<Image
				src='/footer-grid-4.png'
				width={500}
				height={320}
				alt='Картинка 1'
				className='object-cover h-full w-full'
			/>
		</div>
	)
}

export default FooterGrid
