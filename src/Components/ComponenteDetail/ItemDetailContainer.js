import React , { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {ItemDetail} from './ItemDetail';
import  { getDoc , collection , doc }   from "firebase/firestore"
import { db } from  "../../firebase/firebase" ;

    export const ItemDetailContainer = () => {
      const { id } = useParams ();
      const [Products , setProducts]= useState([]);
      const [Loading , setLoadind] = useState (true);
     
      
      useEffect(() => {
        const docRef = doc(db, "productos", id)
        getDoc(docRef).then(response => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data }
            setProducts(productAdapted)
        }).finally(() => {
          setLoadind(false)
        })
    }, [id]);
      return (
        <>
         
         {<>{Loading ? <h1>cargando...</h1> : <ItemDetail  detalles = {Products}/>}</>}
        
        </>
       
      );
    };
    
     