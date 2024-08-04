import FadeIn from '@/components/fadeIn/FadeIn'
import cn from 'clsx'
import styles from './ColoredGrid.module.scss'
import Image from 'next/image'

const ColoredGrid = () => {
	return (
		<FadeIn className={cn(styles.coloredgrid, 'relative py-16 mb-16 xl:mb-0')}>
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
						'glass md:bg-accent bg-transparent p-4 pt-10'
					)}
				>
					Туалетные “комнаты” в некоторых локациях оборудованы. В иных случаях
					надо будет озаботится решением по походному биотуалету, сделать ширму.
				</div>
				<div
					className={cn(
						styles.square,
						'glass md:bg-neutral bg-transparent p-4 pt-10'
					)}
				>
					Некоторые из локаций больше подходят для курсирлвания возле пляжа на
					сапах, а в одной из них вообще имеется бар, баня и активные виды
					спорта. Прогноз погоды ежедневно менятеся. Будем смотреть
				</div>
				<div
					className={cn(
						styles.square,
						'glass md:bg-primary bg-transparent p-4 pt-10'
					)}
				>
					Локации мы подбирали так, чтобы в крайних случаях можно на машине
					доехать до дачи, до магазина или любой другой цивилизации.
				</div>
				<div
					className={cn(
						styles.square,
						'glass md:bg-secondary bg-transparent p-4 pt-10'
					)}
				>
					Примерное меню до сих пор обсуждается. Точно планируется гречка или
					макароны с тушенкой, шашлыки, арбуз, хлеб, колбаса, сыр, что-то к чаю.
					2-3 приема пищи в первый день. И 2 во второй.
				</div>
			</div>
		</FadeIn>
	)
}

export default ColoredGrid
