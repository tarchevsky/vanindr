const PointsGrid = () => {
	return (
		<div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-24 mb-16 p-6 md:p-0'>
			<div className='relative'>
				<div
					id='organization'
					className='absolute -z-10 h-full w-full -left-4 -top-4 text-6xl font-extrabold text-neutral-200'
				>
					1.
				</div>
				<p>Определяемся с локацией и сбрасываем всем геоданные</p>
			</div>
			<div className='relative'>
				<div className='absolute -z-10 h-full w-full -left-4 -top-4 text-6xl font-extrabold text-neutral-200'>
					2.
				</div>
				<p>
					Приезжаем на точку в назначенное время, паркуем машины, разгружаемся,
					проходим по писку, у кого что имеется
				</p>
			</div>
			<div className='relative'>
				<div className='absolute -z-10 h-full w-full -left-4 -top-4 text-6xl font-extrabold text-neutral-200'>
					3.
				</div>
				<p>
					Купаемя, разводим костер, готовим еду в том числе на газовых горелках,
					проводим вечерние игровые активности
				</p>
			</div>
			<div className='relative'>
				<div className='absolute -z-10 h-full w-full -left-4 -top-4 text-6xl font-extrabold text-neutral-200'>
					4.
				</div>
				<p>
					Рапределяем провизию и питание, определяем весовую нагрузку, кто что
					везет, кто как едет
				</p>
			</div>
			<div className='relative'>
				<div className='absolute -z-10 h-full w-full -left-4 -top-4 text-6xl font-extrabold text-neutral-200'>
					5.
				</div>
				<p>
					Сооружаем лагерь: ставим палатки, создаем общую зону, организуем
					хранение вещей и проуктов.
				</p>
			</div>
			<div className='relative'>
				<div className='absolute -z-10 h-full w-full -left-4 -top-4 text-6xl font-extrabold text-neutral-200'>
					6.
				</div>
				<p>
					После танцев, вечерней болтовни и большого раздника расходимся по
					кроваткам. Утром нас ждет завтрак на костре и продолжение отдыха.
				</p>
			</div>
		</div>
	)
}

export default PointsGrid
