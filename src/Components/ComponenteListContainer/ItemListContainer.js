import React, { useEffect, useState } from 'react';
import {ItemList} from '../ComponenteListContainer/ItemList';
import { useParams } from 'react-router-dom';
import  { getDocs , collection , query  , where }   from "firebase/firestore"
import { db } from  "../../firebase/firebase" ;



export const ItemListContainer = ({gretting , Mensaje}) => {
  const [Productos , setProductos]= useState([]);
  const [Loading , setLoading] = useState (true);
 
 
  const{ categoriaId } = useParams ();
   
  const URL_BASE = 'https://63505e5b3e9fa1244e452d0a.mockapi.io/api/productos'
  
  const urlCategory = 'https://63505e5b3e9fa1244e452d0a.mockapi.io/api/productos/1/categoria/${categoriaId}';

  const productCollection = collection (db , 'productos');
  const q = query (productCollection, where( 'categoriaId' , '==', `${categoriaId}`));
  const t = (categoriaId ?  q : productCollection );
 
  useEffect(() => {
   
  getDocs(t)
  .then ((result)=> {
  const listadoProducto = result.docs.map(item =>{
    return {
      ...item.data(),
      categoriaId: item.id ,
    };
  });
  console.log(listadoProducto);
  setProductos(listadoProducto);
  } )
.catch ((error) => {
  console.log(error);
})
.finally (
  setLoading(false)
);
  
}
, [categoriaId ]); 
  
  
  return (

    <>
    <h1>{gretting}</h1>
    <h1>{Mensaje}</h1>
   {<>{Loading ? <h1>cargando...</h1> : <ItemList Productos = {Productos}/>}</>}

    
    </>
    
  )
  }

    // const getProducts = async () => {
    //     try {
    //         const res = await fetch(URL_BASE);
    //         const data = await res.json();
    //         setProductos(categoriaId  ? data.filter((item)=> item.categoriaId === categoriaId): data);
    //         }
    //     catch (error) {
    //         console.log(error);
    //     }
    //     finally {
    //         setLoading(false);
    //     }
    // } 
    // getProducts();