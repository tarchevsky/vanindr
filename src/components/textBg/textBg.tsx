import Image from 'next/image'
import FadeIn from '@/components/fadeIn/FadeIn'
import cn from 'clsx'

const TextBg = () => {
	return (
		<FadeIn
			className={cn(
				'relative w-full h-[75svh] sm:h-[60svh] xl:h-[90svh] flex items-start sm:items-center xl:items-center justify-end pt-12 sm:pt-0'
			)}
		>
			<Image
				src='/skies.png'
				alt='Отдых у костра'
				width={900}
				height={538}
				className='absolute top-0 left-0 w-full h-full object-cover'
			/>
			<div
				className={cn(
					'relative z-10 w-[40svh] xl:w-[600px] p-4 xl:px-10 xl:py-[71px] mx-10 sm:ml-0 md:mr-[10svh] xl:mr-[21svh] border-2 border-base-100 text-base-100 text-[10px] sm:text-sx md:text-[16px]'
				)}
			>
				<p>
					Почему еще стоит отправится на ночевку в палатках в эти даты? На эти
					числа придется пик метеорного потока Персеиды. Ожидается, что
					максимальная интенсивность звездопада составит 100−150 падающих звезд
					в час. И произойдет это в ночи с 10 по 12 августа. Увидеть красоту ,
					если над головами будет ясное небо.
					<br />
					<br />
					Метеоры летят со скоростью около 210 тысяч километров в час и начинают
					загораться на высоте в 70 километрах над Землей. Некоторые — наиболее
					крупные — будут падать несколько секунд, оставляя в небе яркие
					струйки. Можно успеть загадать какое-нибудь коротенькое желание.
				</p>
			</div>
		</FadeIn>
	)
}

export default TextBg
