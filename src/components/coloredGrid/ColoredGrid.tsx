import FadeIn from '@/components/fadeIn/FadeIn'
import cn from 'clsx'
import styles from './ColoredGrid.module.scss'
import Image from 'next/image'

const ColoredGrid = () => {
	return (
		<FadeIn className={cn(styles.coloredgrid, 'relative py-16 mb-16 lg:mb-0')}>
			<Image
				src='/grass-mob.png'
				alt='Трава на острове'
				width={1719}
				height={1232}
				className='block xl:hidden absolute top-0 left-0 w-full h-full object-cover object-center object-bottom'
			/>
			<div
				className={cn(
					'cont grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-16 text-base-100'
				)}
			>
				<div
					className={cn(
						styles.square,
						'glass md:bg-accent bg-transparent p-4 pt-16'
					)}
				>
					На острове живет очень дружелюбная собака Арчи. В 2023 году Арчи
					ночевал с нами, мы угощали его едой и предлагали покинуть остров, но
					он остался верен базе.
				</div>
				<div
					className={cn(
						styles.square,
						'glass md:bg-neutral bg-transparent p-4 pt-16'
					)}
				>
					Из-за близости большой воды, погода на острове может меняться. Как-то
					небо резко почернело, нас накрыл проливной дождь невиданной силы! Мы
					держали руками тент!Это было очень весело!
				</div>
				<div
					className={cn(
						styles.square,
						'glass md:bg-primary bg-transparent p-4 pt-16'
					)}
				>
					В интернете можно найти статью о том, как какой-то турист отошел от
					палатки пособирать грибы и заблудился. Бродил по болотам 3 дня.
					Кажется, это байка, но давайте не будем проверять!
				</div>
				<div
					className={cn(
						styles.square,
						'glass md:bg-secondary bg-transparent p-4 pt-16'
					)}
				>
					На острове можно найти мангалы-заимки и угли, заботливо оставленные
					предыдущими туристами для потомков! Поддерживается чистоста! Давайте
					ее сохраним!
				</div>
			</div>
		</FadeIn>
	)
}

export default ColoredGrid
