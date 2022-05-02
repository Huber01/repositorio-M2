import React, {useEffect} from "react"
import { getAllCharacters} from "../actions/actions"
import { connect } from 'react-redux';
import Card from "./Card";

function Cards({chars, getAllCharacters}){



return (
<div>
<button onClick={getAllCharacters}>cargar personajes</button>
{
 chars && chars.map(e=> <Card key={e.id} name={e.name} image={e.image} id={e.id} />)
}
</div>
)
}

const mapStateToProps= (state)=>({
    chars: state.characters
})



export default connect(mapStateToProps, {getAllCharacters})(Cards);