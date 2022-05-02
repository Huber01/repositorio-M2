export function addMovieFavorite (payload){
	return { type: "ADD_MOVIE_FAVORITE", payload}

}

export function removeMovieFavorite (id){
	return {type: 'REMOVE_MOVIE', payload: id}
}

export function getMovies(titulo) {
	return function(dispatch){
		return fetch(`http://www.omdbapi.com/?apikey=3d631937&s=${titulo}`)
		.then(response => response.json())
		.then(movies => {
			dispatch({type:'GET_MOVIES', payload:movies})
		})
	}
}

export function getMovieDetail(id){
	return function(dispatch){
		return fetch(`http://www.omdbapi.com/?apikey=3d631937&i=${id}`)
		.then(response => response.json())
		.then (det =>{
			dispatch({type: 'GET_MOVIE_DETAIL', payload:det})
		})
	}
}

