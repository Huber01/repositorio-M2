export const GET_ALL_CHARACTERS= "GET_ALL_CHARACTERS"
export const GET_DETAIL= "GET_DETAIL"

export function getAllCharacters(){
    return (dispatch)=>{
        fetch("https://rickandmortyapi.com/api/character")
        .then(res=> res.json())
        .then(char=>{ 
            return dispatch(
            {
                type: GET_ALL_CHARACTERS,
                payload:char.results
            }

        )
        } )
        .catch(error=> console.log(error))
    }
}

export function getCharacterDetail(id){
    return (dispatch)=>{
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res=> res.json())
        .then(char=>{ 
            return dispatch(
            {
                type: GET_DETAIL,
                payload:char
            }

        )
        } )
        .catch(error=> console.log(error))
    }
}