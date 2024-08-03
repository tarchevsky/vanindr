import Image from 'next/image'
import FadeIn from '@/components/fadeIn/FadeIn'
import styles from './TextBg.module.scss'
import cn from 'clsx'

const TextBg = () => {
	return (
		<FadeIn
			className={cn(
				styles.textbg,
				'relative h-[400px] xl:h-[100svh] w-full grid gap-5 md:pr-[200px] xl:pr-[300px] items-end xl:items-start'
			)}
		>
			<Image
				src='/ivanumangala.png'
				alt='Отдых у костра'
				width={900}
				height={538}
				className='absolute top-0 left-0 w-full h-full object-cover'
			/>
			<div
				className={cn(
					styles.text,
					'relative z-10 w-full p-4 h-full xl:p-16 border-2 border-base-100 text-base-100 text-[14px] md:text-xl'
				)}
			>
				<p>
					Историческая справка про Углянь, про реку Озерну. Рассказать про сапы.
					Что можно их взять или хотя бы один.
					<br />
					<br />В настоящее время на красивых волжских берегах в акватории
					Иваньковского водохранилища располагаются базы отдыха. А еще туристам
					предлагается активный отдых в палатках.
					<br />
					<br />
					Цитатаь какая-то о этом месте.
				</p>
			</div>
		</FadeIn>
	)
}

export default TextBg
