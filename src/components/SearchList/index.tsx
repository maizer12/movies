import { AppSelector } from '../../hooks/reduxHooks'
import './SearchList.Module.scss'
interface IProps {
	open: boolean
	request: string
}
const SearchList = ({ open, request }: IProps) => {
	const movies = AppSelector(state => state.MoviesSlice.popularMovies)
	if (movies) {
		return (
			<ul className={`search-list ${open ? '' : 'search-list-close'} `}>
				{movies? (
					movies.map(e => (
						<li key={e.id} className='search-list__item'>
							<div className='search-list__img'>
								<img
									src={e.medium_cover_image}
									alt='movie'
									className='search-list__image'
								/>
							</div>
							<div className='search-list__content'>
								<h5 className='search-list__name desc'>{e.title}</h5>
								<p className='search-list__text text'>
									Release date:
									<svg
										width='16'
										height='16'
										viewBox='0 0 16 16'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<g clipPath='url(#clip0_5_65)'>
											<path
												d='M8 0C3.58888 0 0 3.58888 0 8C0 12.4111 3.58888 16 8 16C12.4111 16 16 12.4111 16 8C16 3.58888 12.4111 0 8 0ZM8 15C4.14013 15 1 11.8599 1 8C1 4.14013 4.14013 1 8 1C11.8599 1 15 4.14013 15 8C15 11.8599 11.8599 15 8 15Z'
												fill='#A4A4A4'
											/>
											<path
												d='M8.5 3H7.5V8.20702L10.6465 11.3535L11.3535 10.6465L8.5 7.79295V3Z'
												fill='#A4A4A4'
											/>
										</g>
										<defs>
											<clipPath id='clip0_5_65'>
												<rect width='16' height='16' fill='white' />
											</clipPath>
										</defs>
									</svg>
									{e.year}
								</p>
							</div>
						</li>
					))
				) : (
					<h5 className='search-list__none text'>Movie not found</h5>
				)}
			</ul>
		)
	} else {
		return <h2>Ошибка сервера</h2>
	}
}

export default SearchList
