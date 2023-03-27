import React from 'react'
import { Navigation, Pagination, A11y,  EffectFade, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss/pagination'
import './BannerSlider.Module.scss'
import Banner2 from '../../assets/img/banners/1.jpg'
import Banner1 from '../../assets/img/banners/2.jpg'

const BannerSlider = () => {
	const params = {
		modules: [Navigation, Pagination, A11y, EffectFade, Autoplay],
		 autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
		fadeEffect: {
			crossFade: true,
		},
		spaceBetween: 50,
		slidesPerView: 1,
		pagination: { clickable: true },
	}
	return (
		<div className='banner-slider'>
			<Swiper effect='fade' {...params}>
				<SwiperSlide>
					<div className='banner-slider__img'>
						<img src={Banner1} alt='banner' className='banner-slider__icon' />
					</div>
					<h5 className='banner-slider__name'>The best films of all time</h5>
				</SwiperSlide>
				<SwiperSlide>
					<div className='banner-slider__img'>
						<img src={Banner2} alt='banner' className='banner-slider__icon' />
					</div>
					<h5 className='banner-slider__name'>Only on our website</h5>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default BannerSlider
