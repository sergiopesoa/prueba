import React from 'react';
import { Link } from 'react-router-dom';

export const Item =(props) => 
{
    
    return(
    <>
    <Link to= {props.urlPieza} ><h4  key = {props.pieza.id}> Pieza N°{props.pieza.id}   {props.pieza.categoria}{props.pieza.name}    precio : ${props.pieza.precio}   stock :{props.pieza.stock}unid.</h4></Link>
    </>
    )
 }

  