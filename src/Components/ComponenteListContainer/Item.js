import React from 'react';


export const Item =(props) => 
{ 
   
   
    return <h2  key = {props.pieza.id}>{props.pieza.categoria}{props.pieza.id}{props.pieza.nombre} {props.pieza.precio}{props.pieza.stock}</h2>
    
    
   }