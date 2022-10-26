import React from "react";


export const ItemDetail =(props) => 
{ 
  return (

<>
<h2>{props.detalles.name} precio: $ {props.detalles.precio}</h2>

{/* {props.detalles.id}{props.detalles.nombre} {props.detalles.stock}</h2>  */}

</>
  
  )
  
  
}