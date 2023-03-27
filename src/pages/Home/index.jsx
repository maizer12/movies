import Banner from '../../components/Banner'
import MovieCard from '../../components/MovieCard'
import MovieList from '../../components/MovieList'
import SidebarCollection from '../../components/SidebarCollection'
import SidebarSlider from '../../components/SidebarSlider'
import { AppSelector } from '../../hooks/reduxHooks'
import './Home.Module.scss'
const Home = () => {
	const movies = AppSelector(state => state.MoviesSlice.popularMovies)
	const moviesPopular = AppSelector(state => state.MoviesSlice.popularMovies)
	const moviesBest = AppSelector(state => state.MoviesSlice.bestMovies)
	return (
		<main className='home'>
			<div className='home__inner container'>
				<div className='home__content'>
					<Banner />
					<div className='home__moves'>
						<MovieList
							delay={1500}
							title='The most popular'
							movies={moviesPopular}
						/>
						<MovieList
							delay={2500}
							title='Best compilation movies'
							sort='like_count'
							movies={moviesBest}
						/>
					</div>
					<div className='home__colum'>
						{movies.length ? <MovieCard index='01' {...movies[0]} /> : ''}
						{movies.length ? <MovieCard index='02' {...movies[2]} /> : ''}
					</div>
				</div>
				<aside className='sidebar'>
					<SidebarCollection />
					<SidebarSlider />
				</aside>
			</div>
		</main>
	)
}

export default Home
