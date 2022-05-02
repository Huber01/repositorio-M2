import { Link } from "react-router-dom";

export default function Card({name, image, id}){
    return (
    <div>
        <Link to={`/characters/${id}`}>
            <p>{name}</p>
        </Link>
        <img src={image} alt={name} />
    </div>
    )
    }