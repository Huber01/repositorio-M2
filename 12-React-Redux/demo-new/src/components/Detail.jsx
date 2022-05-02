import { getCharacterDetail } from "../actions/actions"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import {connect, useDispatch} from "react-redux"
function Detail({c,getCharacterDetail }){
let {id}=useParams()

const dispatch=useDispatch()


useEffect(()=>{
    getCharacterDetail(id)
},[])

    return (
    <div>
        {
            !c? <span>Cargando...</span>:        
            <div>
                <p>Name: {c.name}</p>        
                <p>Species: {c.species}</p>
                <p>Status: {c.status}</p>
                <p>Gender: {c.gender}</p>
                <p>Origin: {c.origin?.name}</p>
                <p>Location: {c.location?.name}</p>
            </div>        
        }

    </div>
    )
    }

    const mapStateToProps= (state)=>({
        c: state.detail
    })
    
    
    
  export default connect(mapStateToProps, {getCharacterDetail})(Detail);