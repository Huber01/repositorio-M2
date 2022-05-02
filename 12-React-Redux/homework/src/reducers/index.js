const initialState = {
	moviesFavourites: [],
	moviesLoaded: [],
	movieDetail: {}
};

export default function rootReducer(state = initialState, action){
	switch (action.type){
		case 'GET_MOVIES':
			return{
				...state,
				moviesLoaded: action.payload.Search //va a buscar en la propiedad Search de la API
				}
		case 'ADD_MOVIE_FAVORITE':
			return{
				...state,
				moviesFavourites: [...state.moviesFavourites, action.payload]
			}
		case 'REMOVE_MOVIE':
			return{
				...state,
				moviesFavourites: state.moviesFavourites.filter(m => m.id !== action.payload)
			}
		case 'GET_MOVIE_DETAIL':
			return{
				...state,
				movieDetail: action.payload
			}
		default:
			return {...state}
    }
	}

