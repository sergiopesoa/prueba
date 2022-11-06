import React , { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {ItemDetail} from './ItemDetail';
import  { getDoc , collection , doc }   from "firebase/firestore"
import { db } from  "../../firebase/firebase" ;

    export const ItemDetailContainer = () => {
      const { id } = useParams ();
      const [DetalleProductos , setDetalleProductos]= useState([]);
      const [Loading , setLoadind] = useState (true);
     
      useEffect(()=> {
           const productCollection = collection(db, "productos");
           const docReferencia = doc (productCollection, id);

           getDoc (docReferencia)
           .then(result =>{
            setDetalleProductos({
              ...result.data(),
              id: result.id
              
            });
            
            })
           .catch(console.log ("error"))
           .finally(setLoadind(false));
   
      },[id]
      );
      return (
        <>
         
         {<>{Loading ? <h1>cargando...</h1> : <ItemDetail  detalles = {DetalleProductos}/>}</>}
        
        </>
       
      );
    };
    
      //   fetch('https://63505e5b3e9fa1244e452d0a.mockapi.io/api/productos/' + params.productoId)
      //       .then((res)=> res.json())
      //       .then((json)=> setDetalleProductos(json))
      //       .catch((error)=> {
      //        console.log (error);
      //  })