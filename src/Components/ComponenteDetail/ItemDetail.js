import React from "react";


export const ItemDetail =(props) => 
{ 
  return (

<>
<h2>{props.detalles.imagen}{props.detalles.categoria}{props.detalles.id}{props.detalles.nombre} {props.detalles.precio}{props.detalles.stock}</h2> 

</>
  
  )

  
}