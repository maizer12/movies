import { call, put, select } from 'redux-saga/effects'
import { getPopularMovies, getBestMovies } from '../../services/getMovies'
import { setPopularMovies, setBestMovies } from '../slices/MoviesSlice'
import { IMoviesSlice } from '../slices/MoviesSlice'

// function* test() {
// 	const location: string = yield select(
// 		(state: { MoviesSlice: IMoviesSlice }) => state.MoviesSlice.location
// 	)
// 	yield console.log(location)
// }

export function* handleBestMovies() {
	try {
		const { data } = yield call(getBestMovies)
		yield put(setBestMovies(data.movies))
	} catch {
		yield console.log('error')
	}
}

export function* handlePopularMovies() {
	try {
		const { data } = yield call(getPopularMovies, '')
		yield put(setPopularMovies(data.movies))
	} catch {
		yield console.log('error')
	}
}

export default function* rootSaga() {
	yield call(handlePopularMovies)
	yield call(handleBestMovies)
}
