import { Navigation, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import MovieListItem from '../MovieListItem'
import './MovieListItems.Module.scss'
import SkeletonItemSlider from '../Skeletons/SkeletonItemSlider'
import { IMovie } from '../../types/IMovie'

interface IProps {
	delay:number
	movies:IMovie[]
}
const loaderItems = [...new Array(5)]
const MovieListItems = ({ movies, delay,  }: IProps) => {
	const params = {
		modules: [Navigation, A11y, Autoplay],
		navigation: true,
		autoplay: {
			delay: delay,
			disableOnInteraction: false,
		},
		spaceBetween: 30,
		slidesPerView: 5,
		pagination: { clickable: true },
	}
	if (movies) {
		return (
			<ul className='movie-list-items'>
				<Swiper {...params}>
					{movies.map(e => (
						<SwiperSlide key={e.id}>
							<MovieListItem {...e} />
						</SwiperSlide>
					))}
				</Swiper>
			</ul>
		)
	} else {
		return (
			<ul className='movie-list-items'>
				{loaderItems.map((e, i) => (
					<SkeletonItemSlider key={i} />
				))}
			</ul>
		)
	}
}

export default MovieListItems
