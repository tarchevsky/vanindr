import Image from 'next/image'
import FadeIn from '@/components/fadeIn/FadeIn'
import styles from './TextBg.module.scss'
import cn from 'clsx'

const TextBg = () => {
	return (
		<FadeIn
			className={cn(
				styles.textbg,
				'relative lg:h-[900px] xl:h-[100svh] w-full grid gap-5 items-end xl:items-start xl:justify-end'
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
					styles.text,
					'relative z-10 w-full xl:w-[600px] p-4 h-full xl:px-10 xl:py-[71px] border-2 border-base-100 text-base-100'
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
