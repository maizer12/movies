import React from 'react'
import BannerSlider from '../BannerSlider'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import './Banner.Module.scss'
const Banner = () => {
	
	return (
		<section className='banner'>
			<Breadcrumbs/>
			<BannerSlider />
			<p className="banner__desc desc">
				We have compiled for you a selection of the best films on the topic “name of the selection” with a rating from minimum rating of films from the selection to maximum rating of films from the selection. It includes films of the following genres: genre1(number of times), genre2(number of times), genre3(number of times). The newest movie is year of the year, the oldest movie is year of the year. The duration of movies is from minimum length to maximum length. Choose a movie and enjoy!
			</p>
		</section>
	)
}

export default Banner
