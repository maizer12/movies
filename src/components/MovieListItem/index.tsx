import React from 'react'
import { IMovie } from '../../types/IMovie'
import './MovieListItem.Module.scss'
import RatingOne from '../../assets/img/movie/rating/1.jpg'
import RatingTwo from '../../assets/img/movie/rating/2.jpg'
import { ratingGenerate } from '../../helpers/ratingGenerate'
import HoverIcon from '../../assets/img/youtube.png'
const MovieListItem = ({
	title,
	title_long,
	medium_cover_image,
	rating,
}: IMovie) => {
	return (
		<li className='movie-list-item'>
			<div className='movie-rating'>
				<div className='movie-rating__item'>
					<img src={RatingOne} alt='rating' className='movie-rating__image' />
					<h4 className='movie-rating__num text'>{rating}</h4>
				</div>
				<div className='movie-rating__item'>
					<img src={RatingTwo} alt='rating' className='movie-rating__image' />
					<h4 className='movie-rating__num text'>{ratingGenerate(rating)}</h4>
				</div>
			</div>
			<div className='movie-list-item__image'>
				<div className='movie-item-hover'>
					<img src={HoverIcon} alt='hover' className='movie-item-hover__icon' />
					<p className='movie-item-hover__text'>Watching</p>
				</div>
				<img
					src={medium_cover_image}
					alt='movie'
					className='movie-list-item__img'
				/>
			</div>
			<h5 className='movie-list-item__name'>{title}</h5>
			<p className='movie-list-item__desc desc'>{title_long}</p>
		</li>
	)
}

export default MovieListItem
