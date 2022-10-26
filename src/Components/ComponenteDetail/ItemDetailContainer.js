import React , { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {ItemDetail} from './ItemDetail';


    export const ItemDetailContainer = (props) => {
    const params = useParams ();
      const [DetalleProductos , setDetalleProductos]= useState([]);
      console.log(params);
      useEffect(()=> {
        fetch('https://63505e5b3e9fa1244e452d0a.mockapi.io/api/productos/' + params.productoId)
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