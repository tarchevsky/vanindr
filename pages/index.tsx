import { NextPage } from 'next'
import Hero from '@/components/hero/Hero'
import Meta from '@/components/meta/Meta'
import Image from 'next/image'
import CheckList from '@/components/checkList/CheckList'
import PointsGrid from '@/components/pointsGrid/PointsGrid'
import FadeIn from '@/components/fadeIn/FadeIn'
import TextBg from '@/components/textBg/textBg'
import Vibe from '@/components/vibe/Vibe'
import ColoredGrid from '@/components/coloredGrid/ColoredGrid'
import SimpleGallery from '@/components/simpleGallery/SimpleGallery'
import FooterGrid from '@/components/footerGrid/FooterGrid'
import Friends from '@/components/friends/Friends'

const HomePage: NextPage = () => {
	return (
		<>
			<Meta title='Главная' metaDesc='Описание страницы' />
			<Hero src='/main-1.png' alt='Альт картинки' title='Углынь' />
			<div className='relative z-10 m-auto mt-[88svh] md:mt-[90.4svh] xl:mt-[82svh] xl:w-[900px] xl:h-[538px]'>
				<Image
					src='/shore-1.png'
					alt='Отдых у костра'
					width={900}
					height={538}
					className='m-auto w-full h-full object-cover'
				/>
				<div className='pl-0 md:pl-[82px] xl:pl-0 xl:absolute xl:-bottom-48 xl:-right-10 flex flex-col w-full xl:w-[490px] xl:-translate-y-1/2'>
					<div className='p-4 w-full font-bold bg-primary uppercase text-lg text-base-100'>
						На стыке Рузского района и <br />
						Истринского, возде дачи
					</div>
					<div className='xl:self-end p-4 bg-secondary xl:w-[90%] text-base-100'>
						<div>10-11 августа 2024</div>
						<div>
							Место встречи:
							<br />
							<br />
							Песчаная коса возле деревни Углынь, где река совершает изгиб.
							Заранее можно втретиться у нас на даче, чтобы поехать вместе.
							Координаты GPS будут предоставлены.
							<br />
							<br />
							Сбор с 10:00 до 11.00 утра
						</div>
					</div>
				</div>
			</div>
			<SimpleGallery />
			<FadeIn className='cont'>
				<PointsGrid />
			</FadeIn>
			<Vibe />
			<TextBg />
			<CheckList />
			<ColoredGrid />
			<Friends />
			<FooterGrid />
		</>
	)
}

export default HomePage
