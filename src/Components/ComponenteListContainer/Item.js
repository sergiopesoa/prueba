import React from 'react';
import { Link } from 'react-router-dom';

export const Item =(props) => 
{
    
    return(
<>


<Link to= {props.urlPieza} ><h2  key = {props.pieza.id}>{props.pieza.imagen}{props.pieza.categoria}{props.pieza.id}{props.pieza.nombre} {props.pieza.precio}{props.pieza.stock}</h2></Link>
</>


    )
  
      
   }