import { createSlice } from '@reduxjs/toolkit'
import { IMovie } from '../../types/IMovie'

export interface IMoviesSlice {
	location: string
	popularMovies: IMovie[]
	bestMovies: IMovie[]
}

const initialState: IMoviesSlice = {
	location: '/',
	popularMovies: [],
	bestMovies: [],
}

export const MoviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		getLocation: (state, action) => {
			state.location = action.payload
		},
		setPopularMovies: (state, action) => {
			state.popularMovies = action.payload
		},
		setBestMovies: (state, action) => {
			state.bestMovies = action.payload
		},
	},
})

export default MoviesSlice.reducer
export const { getLocation, setPopularMovies, setBestMovies } =
	MoviesSlice.actions


