const key = '538d524670de79d0fac89b42fc1cd72a'

const requests = {
	requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
	requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
	requestTrending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=en-US`,
	requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
}

export default requests