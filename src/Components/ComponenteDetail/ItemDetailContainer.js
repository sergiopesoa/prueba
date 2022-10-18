import React , { useEffect, useState } from "react";
import {ItemDetail} from './ItemDetail';


export const detalleProducto = {
    caracteristicas:"Esta taza pertenece a la coleccion primavera que hemos creado para la hora del cafe o del te, su precio es de $" , precio: 400}

    const listaDetalleProducto = new Promise((resolve , reject)=> {
        setTimeout(() => {
          resolve(detalleProducto);
        }, 2000);
      })

    export const ItemDetailContainer = (props) => {
    
      const [DetalleProductos , setDetalleProductos]= useState([]);

      useEffect(()=> {
        console.log (listaDetalleProducto);
       listaDetalleProducto
       .then((data)=> {
        setDetalleProductos(data);
       })
       .catch((error)=> {
       console.log (error);
       })
    
      },[]
      )
      return (
        <>
         
        <ItemDetail detalles = {detalleProducto}/>
        
        </>
       
      );
    }