import React from "react";

import {Item} from "./Item";


export const ItemList = (props) => {
    
    return (
        <>
            {
             props.Productos.map((producto) => {
             return   <Item key = {producto.id} pieza={producto} urlPieza={'/producto/${producto.id}'}/>
             
            })
            
        }
            
        </>

    );
   

}