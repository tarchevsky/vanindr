import cn from 'clsx'
import styles from './CheckList.module.scss'
import Checkbox from '@/components/checkbox/Checkbox'
import Image from 'next/image'

const CheckList = () => {
	return (
		<>
			<h3 className='text-center font-extrabold text-3xl uppercase my-14'>
				Взять с собой
			</h3>
			<form
				id='take'
				className={cn(
					styles.checklist,
					'grid gap-5 mb-10 px-[20px] sm:px-[45px] lg:px-0'
				)}
			>
				<div
					className={cn(styles.required, 'lg:border-r-2 lg:border-gray-900')}
				>
					<div className='md:w-[200px] text-center'>Обязательно</div>
				</div>
				<div
					className={cn(
						styles.requiredboxes,
						'grid sm:grid-cols-3 grid-cols-1'
					)}
				>
					<div>
						<Checkbox label='палатка' />
						<Checkbox label='спальник' />
						<Checkbox label='коврик, матрас-пенка' />
						<Checkbox label='надувная подушка' />
						<Checkbox label='чашка, миска, ложка, вилка' />
						<Checkbox label='походный стульчик' />
					</div>

					<div>
						<Checkbox label='фонарики' />
						<Checkbox label='пауэрбанки, батарейки ' />
						<Checkbox label='головной убор от солнца' />
						<Checkbox label='дождевик' />
						<Checkbox label='солнце-защитный крем' />
						<Checkbox label='зубная щетка, паста' />
					</div>

					<div>
						<Checkbox label='аптечка, туалетная бумага' />
						<Checkbox label='вода (6-8 л на человека)' />
						<Checkbox label='запас еды, чайные пакетики' />
						<Checkbox label='купальник, полотенце, плед' />
						<Checkbox label='шлепки и закрытая обувь' />
						<Checkbox label='теплая одежда на вечер' />
					</div>
				</div>
				<div
					className={cn(
						styles.zone,
						'md:w-[200px] justify-self-center text-center lg:border-r-2 lg:border-gray-900'
					)}
				>
					В общей зоне
				</div>
				<div
					className={cn(
						styles.zoneboxes,
						'grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1'
					)}
				>
					<div>
						<Checkbox label='газовая горелка или баллоны' />
						<Checkbox label='стол, топор, лопата' />
						<Checkbox label='кастрюля, котелок, чайник' />
						<Checkbox label='одноразовый мангал' />
						<Checkbox label='угли, розжиг' />
						<Checkbox label='тент, паракорд' />
					</div>

					<div>
						<Checkbox label='умывальник, мусорные мешки' />
						<Checkbox label='средство для мытья посуды' />
						<Checkbox label='нож, разделочная доска' />
						<Checkbox label='спички, зажигалка, лопата' />
						<Checkbox label='влажные салфетки' />
						<Checkbox label='репелленты  от насекомых' />
					</div>

					<div>
						<Checkbox label='колонка музыкальная' />
						<Checkbox label='гамак' />
						<Checkbox label='мяч, бадминтон или игра' />
						<Checkbox label='арбуз, шашлык, макароны' />
						<Checkbox label='тушенка, вафли, хлеб' />
						<Checkbox label='суповой набор, мюсли' />
					</div>
				</div>
				<div className={cn(styles.pic)}>
					<Image
						src='/fedorchoosepoints.png'
						alt='Арчи, обитатель острова Уходово'
						width={807}
						height={557}
						className='w-full h-full object-cover'
					/>
				</div>
				<div className={cn(styles.text)}>
					В планах распределить как предметы между людьми и информация о том, ч
					то справлять не планироваля, но вот решили в таком формате, поётому
					вместо подарков надо распределить, кто что несет, чтобы это все было.
					<br />
					<br />
					Поощряется придумывание активностей вами
				</div>
			</form>
		</>
	)
}

export default CheckList
