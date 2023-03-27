import { Navigation, A11y, Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import SidebarSliderItem from '../SidebarSliderItem'
import SidebarTitle from '../SidebarTitle'
import './SidebarSlider.Module.scss'
const SidebarSlider = () => {
	const params = {
		modules: [Navigation, A11y, Autoplay, Pagination],
		navigation: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		spaceBetween: 30,
		slidesPerView: 1,
		pagination: { clickable: true },
	}
	return (
		<section className='sidebar-slider'>
			<SidebarTitle>Popular collections</SidebarTitle>
			<ul className='sidebar-slider__items'>
				<Swiper {...params}>
					<SwiperSlide >
						<SidebarSliderItem />
					</SwiperSlide>
					<SwiperSlide >
						<SidebarSliderItem />
					</SwiperSlide>
					<SwiperSlide >
						<SidebarSliderItem />
					</SwiperSlide>
				</Swiper>
			</ul>
		</section>
	)
}

export default SidebarSlider
