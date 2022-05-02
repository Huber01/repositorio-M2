import React from "react";


export default function City({city}) {

    if(!city){
        alert('la ciudad no existe');
        return(<div>La ciudad no existe</div>)
    }

   

    return (
        <div className="ciudad">
            city {city.name}
               
        </div>
    )
}