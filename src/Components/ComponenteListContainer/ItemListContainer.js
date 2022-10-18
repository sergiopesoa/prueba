import { InsertEmoticonOutlined } from '@mui/icons-material';
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { ItemCount } from '../ComponenteContador/ItemCount';
import {ItemList} from '../ComponenteListContainer/ItemList';
import { useParams } from 'react-router-dom';




export const Productos = [
{nombre:"taza" , id: 0 , categoria: "cafe y te" , stock: 5 , precio: 400},
{nombre:"tetera" , id: 1 , categoria: "cafe y te" , stock: 5 , precio: 600},
{nombre:"fuente" , id: 2 , categoria: "cafe y te" , stock: 5 , precio: 300},
{nombre:"plato" , id: 3 , categoria: "vajilla" , stock: 5 , precio: 400},
]
const listaProductos = new Promise((resolve , reject)=> {
  setTimeout(() => {
    resolve(Productos);
  }, 2000);
})


export const ItemListContainer = ({gretting , Mensaje}) => {
  const [Productos , setProductos]= useState([]);
  const [Loading , setLoading] = useState (true)
  const {idCategoria} = useParams ();
  console.log (idCategoria);

  const URL_BASE = 'listaProductos'
 

   
  useEffect(()=> {
   console.log (listaProductos);
   listaProductos
   .then((data)=> {
    setProductos(data);
   })
   .catch((error)=> {
    console.log ("todo mal");
   })
   .finally (()=> {
     setLoading(false);
   })   
   })
  
  const onAdd = () => {
    console.log ('agregaste un producto al carrito')
  };

  return (

    <>
    <h1>{gretting}</h1>
    <h1>{Mensaje}</h1>
   {<>{Loading ? <h1>cargando...</h1> : <ItemList ceramica = {Productos}/>}</>}

    <ItemCount  stock = {4} initial = {1} onAdd = {onAdd}/>
    </>
    
  )
  }
