import { ratingGenerate } from '../../helpers/ratingGenerate'
import { IMovie } from '../../types/IMovie'
import './MovieCard.Module.scss'
import HoverIcon from '../../assets/img/youtubeBig.png'
const MovieCard = ({
	title,
	title_long,
	large_cover_image,
	index,
	date_uploaded,
	year,
	runtime,
	genres,
	language,
	description_full,
	rating
}: IMovie) => {
	console.log()
	return (
		<section className='movie-card'>
			<div className='movie-card__image'>
				<div className='movie-card__index'>{index}</div>
				<div className='movie-card__photo'>
					<div className='movie-card-hover'>
						<img
							src={HoverIcon}
							alt='hover'
							className='movie-card-hover__icon'
						/>
						<p className='movie-card-hover__text text'>Watching</p>
					</div>
					<img
						src={large_cover_image}
						alt='movie'
						className='movie-card__img'
					/>
				</div>
				<div className='movie-card-rating'>
					<div className='movie-card-rating__item'>
						<h5 className='movie-card-rating__num'>{rating}</h5>
						<p className='movie-card-rating__text'>MovieSA</p>
					</div>
					<div className='movie-card-rating__item'>
						<h5 className='movie-card-rating__num'>{ratingGenerate(rating)}</h5>
						<p className='movie-card-rating__text'>IMDd</p>
					</div>
				</div>
			</div>
			<div className='movie-information'>
				<h3 className='movie-information__title title'>{title_long}</h3>
				<h3 className='movie-information__name'>{title}</h3>
				<ul className='movie-colum'>
					<li className='movie-colum__item'>
						<h6 className='movie-colum__name desc'>Movie uploaded:</h6>
						<p className='movie-colum__desc text'>{date_uploaded}</p>
					</li>
					<li className='movie-colum__item'>
						<h6 className='movie-colum__name desc'>Year of issue:</h6>
						<p className='movie-colum__desc text'>{year}</p>
					</li>
					<li className='movie-colum__item'>
						<h6 className='movie-colum__name desc'>Runtime:</h6>
						<p className='movie-colum__desc text'>{runtime}</p>
					</li>
				</ul>
				<ul className='movie-characteristics'>
					<li className='movie-characteristics__item'>
						<h5 className='movie-characteristics__name text'>Genre:</h5>
						<p className='movie-characteristics__text text'>
							{genres.join(' ')}
						</p>
					</li>
					<li className='movie-characteristics__item'>
						<h5 className='movie-characteristics__name text'>Language:</h5>
						<p className='movie-characteristics__text text'>{language}</p>
					</li>
					<li className='movie-characteristics__item'>
						<h5 className='movie-characteristics__name text'>Genre</h5>
						<p className='movie-characteristics__text text'>
							Боевик, Комедия, Драма
						</p>
					</li>
				</ul>
				<div className='movie-desc'>
					<h5 className='movie-desc__title name'>
						What is the movie about “{title}”
					</h5>
					<p className='movie-desc__text text'>{description_full}</p>
				</div>
			</div>
		</section>
	)
}

export default MovieCard
