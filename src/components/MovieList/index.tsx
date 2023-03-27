import { IMovie } from "../../types/IMovie";
import MovieListItems from "../MovieListItems";
import './MovieList.Module.scss'

interface IProps{
	title:string,
	delay:number,
	movies:IMovie[]
}

const MovieList = ({title, delay, movies}:IProps) => {
	
	return (
		<section className='movie-list'>
			<h5 className="movie-list__title title">{title}</h5>
			<MovieListItems delay={delay} movies={movies} />
		</section>
	);
};

export default MovieList;