import {GET_ALL_CHARACTERS, GET_DETAIL} from "../actions/actions"

let initialState={
    characters:[],
    detail:{}
}

export default function reducer(state=initialState, {type, payload} ){
switch(type){
    case GET_ALL_CHARACTERS:
        return {
            ...state,
            characters: payload
        }
    case GET_DETAIL:
        
        
        return {
            ...state,
            detail: payload
        }
    default:
        return state
}
}