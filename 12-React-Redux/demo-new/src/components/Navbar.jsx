import {Link} from "react-router-dom"
export default function Navbar(){
    return (
    <div>
        <ul>
            <li ><Link to="/">Home</Link></li>
            <li ><Link  to="/characters">Characters</Link></li>            
        </ul>
    </div>
    )
    }