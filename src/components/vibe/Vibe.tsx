import FadeIn from '@/components/fadeIn/FadeIn'
import cn from 'clsx'
import styles from './Vibe.module.scss'
import Image from 'next/image'

const Vibe = () => {
	return (
		<>
			<FadeIn className='mb-20 xl:mb-16'>
				<aside
					className={cn(styles.vibe, 'flex flex-col xl:flex-row xl:gap-14')}
				>
					<div
						className={cn(
							styles.grid,
							'grid gap-10 pl-0 md:pl-[82px] 2xl:pl-[120px]'
						)}
					>
						<div className='font-black text-4xl p-4 pb-0 uppercase'>
							Шашлыки на <br />
							природе в походе <br />- это искусство, <br />
							объединяющее <br />
							сердца
						</div>
						<div className='flex flex-col w-full xl:w-[490px]'>
							<div className='p-4 w-full font-bold bg-primary uppercase text-lg text-base-100'>
								Жизнь под открытым небом
							</div>
							<div className='xl:self-end p-4 bg-secondary xl:w-[80%] text-base-100'>
								Общие приключения и испытания на свежем воздухе скрепляют дружбу
								на всю жизнь
							</div>
						</div>
					</div>
					<div
						className={cn(
							styles.grid,
							'flex flex-col xl:grid xl:grid-rows-2 gap-10 w-full h-full'
						)}
					>
						<div>
							<Image
								src='/pot.png'
								alt='Еда готовится на костре в котелке'
								width={882}
								height={262}
								className='w-full h-full object-cover'
							/>
						</div>
						<p className='px-[20px] sm:px-[45px] md:px-[82px] xl:px-0'>
							При желании можно приехать на день, без ночевки в палатках. У нас
							с Ваней есть свободная комната в нашей двухкомнатной палатке, а
							также свободна наша бывшая палатка - трехместная. Можно
							воспользоваться ими, если есть желание!
							<br />
							<br />
							Мы уже отсмотрели несколько локаций под наше мероприятие, но все
							они имеют различные особенности, поэтому решать будем накануне,
							исходя из погодных условий. Все выбранные места очень живописны,
							но где-то чуть более комфортные условия, но кое-где платный въезд,
							а где-то убитая дорога, но есть, например, семья аистов! Где-то
							песчаный пляж, а где-то тина, в воду не зайти.
						</p>
					</div>
				</aside>
			</FadeIn>
		</>
	)
}

export default Vibe
