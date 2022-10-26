import React from 'react';


export const Item =(props) => 
{
    
    return(
<>


<a href= {props.urlPieza} ><h2  key = {props.pieza.id}>{props.pieza.imagen}{props.pieza.categoria}{props.pieza.id}{props.pieza.nombre} {props.pieza.precio}{props.pieza.stock}</h2></a>
</>


    )
  
      
   }