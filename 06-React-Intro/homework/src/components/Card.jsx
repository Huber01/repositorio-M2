import React from 'react';
import style from './Card.module.css'



export default function Card(props) {
  // acá va tu código
  return <div className={style.card}>
     
      <button className={style.btn} onClick = {props.onClose}> X </button>  
      <h6>city {props.name}</h6>
      <div className = {style.temps}>
        
        <p>max {props.max}</p>
        <p>{props.max}</p>
        <p>min</p>
        <p>{props.min}</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt = 'img'/>
      
      
    
    </div>
};

/* class Card extends React.Component{
  render(){
    return(
      <div>
         <h6> max {this.props.max} </h6>
         <h6>min {this.props.min}</h6>
         <h6>city {this.props.name}</h6>
         <img src={`http://openweathermap.org/img/wn/${this.props.img}@2x.png`} alt = 'img'/>
         <button onClick = {this.props.onClose}> X </button>
       
       </div>)
  }
}
export default Card; */