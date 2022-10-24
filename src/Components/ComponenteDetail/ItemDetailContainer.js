import React , { useEffect, useState } from "react";
import {ItemDetail} from './ItemDetail';


    export const ItemDetailContainer = (props) => {
    
      const [DetalleProductos , setDetalleProductos]= useState({});

      useEffect(()=> {
        fetch('https://63505e5b3e9fa1244e452d0a.mockapi.io/api/productos/1')
            .then((res)=> res.json())
            .then((json)=> setDetalleProductos(json))
            .catch((error)=> {
       console.log (error);
       })
    
      },[]
      )
      return (
        <>
         
        <ItemDetail  detalles = {DetalleProductos}/>
        
        </>
       
      );
    }