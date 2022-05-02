//import { calculateExtensionPriority } from '@11ty/eleventy/src/TemplateData';
import React from 'react';
import Card from './Card.jsx';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return <div>
      {
        cities&&cities.map(c => 
        <Card 
        onClose = {()=> alert(c.name)}
          key = {c.id}  
          max = {c.main.temp_max} 
          min = {c.main.temp_min} 
          name = {c.name} 
          img = {c.weather[0].icon} />)
      }

  </div>
};

/* class Cards extends React.Component{
  render(){
    return(
      <div>
        {
          this.props.cities && this.props.cities.map (c =>(
            <Card
            key = {c.id}
            max = {c.main.temp_max}
            min = {c.main.temp_min}
            name = {c.name} img
            img = {c.weather[0].icon}
            onClose = {()=>alert (c.name)}
              />
          ))
        }
      </div>
    )
  }
}   
export default Cards; */