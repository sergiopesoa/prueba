import { InsertEmoticonOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { ItemCount } from '../ComponenteContador/ItemCount';
import {ItemList} from '../ComponenteListContainer/ItemList';
import { useParams } from 'react-router-dom';


export const ItemListContainer = ({gretting , Mensaje}) => {
  const [Productos , setProductos]= useState([]);
  const [Loading , setLoading] = useState (true);
 
 
  const{ categoriaId } = useParams ();
   
  const URL_BASE = 'https://63505e5b3e9fa1244e452d0a.mockapi.io/api/productos'
  const URL_CAT =  'https://63505e5b3e9fa1244e452d0a.mockapi.io/api/productos/1/categoria'
    
  useEffect(()=> {
    const getProductos = async () => {
      try  {
        const res = await fetch('https://63505e5b3e9fa1244e452d0a.mockapi.io/api/productos');
        const data = await res.json ();
       
        setProductos(data);
        
        console.log(Productos);
        console.log (categoriaId);
        
        } catch {
        console.log ("todo mal");
   } finally {
     setLoading(false);
  const ProductosCategoria = categoriaId ? Productos.filter( item => item.categoriaId === categoriaId) : Productos
   }
  };
  getProductos(); 
   }, [categoriaId])
  
  const onAdd = () => {
    console.log ('agregaste un producto al carrito')
  };

  return (

    <>
    <h1>{gretting}</h1>
    <h1>{Mensaje}</h1>
   {<>{Loading ? <h1>cargando...</h1> : <ItemList Productos = {Productos}/>}</>}

    <ItemCount  stock = {4} initial = {1} onAdd = {onAdd}/>
    </>
    
  )
  }
