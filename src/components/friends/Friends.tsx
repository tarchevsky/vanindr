import cn from 'clsx'
import styles from './Friends.module.scss'
import Image from 'next/image'

const Friends = () => {
	const friendsData = [
		{ person: 'ivan' },
		{ person: 'masha' },
		{ person: 'lesya' },
		{ person: 'sukhrob' },
		{ person: 'nikita' },
		{ person: 'natasha2' },
		{ person: 'serj' },
		{ person: 'olga' },
		{ person: 'evgenia' },
		{ person: 'mama' },
		{ person: 'natasha1' },
		{ person: 'fedor' },
		{ person: 'mark' },
		{ person: 'galina' },
		{ person: 'dunya' },
		{ person: 'vlasta' }
	]

	return (
		<div className='relative mb-20'>
			<h3 className='text-4xl font-bold text-center mb-[51px]'>Туристы</h3>
			<div
				className={cn(
					styles.friends,
					'relative grid gap-y-20 gap-x-6 md:max-w-2xl m-auto mb-16'
				)}
			>
				{friendsData.map((friend, index) => (
					<Image
						key={index}
						src={`/friends/${friend.person}.png`}
						width={204}
						height={204}
						alt={friend.person}
						style={{ gridArea: friend.person }}
						className={cn('p-2 border border-black rounded-full')}
					/>
				))}
			</div>
			<Image
				src='/friends-bg-full.png'
				width={1900}
				height={800}
				alt='Фон блока про друзей'
				className='hidden lg:block absolute -z-10 top-44 left-0 w-full'
			/>
		</div>
	)
}

export default Friends
