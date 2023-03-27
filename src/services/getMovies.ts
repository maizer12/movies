export const getPopularMovies = async (genre:string) => {
	const res = await fetch(
		'https://yts.mx/api/v2/list_movies.json?limit=15&sort_by=rating&genre=' + genre
	)
		.then(res => res.json())
		.then(res => {
			return res
		})
	return await res
}
export const getBestMovies = async () => {
	const res = await fetch(
		'https://yts.mx/api/v2/list_movies.json?limit=15&sort_by=like_count'
	)
		.then(res => res.json())
		.then(res => {
			return res
		})
	return await res
}