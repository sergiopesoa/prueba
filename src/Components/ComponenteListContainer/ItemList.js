import React from "react";

import {Item} from "./Item";


export const ItemList = (props) => {
    
    return (
        
        <div style={styles.container}>
        
        <>
            {
                          
             props.Productos.map((producto) => {
             return   <Item key = {producto.id} pieza={producto} urlPieza={`/producto/${producto.id}`}/>
             })
             }
             
        </>
        </div>
    );
}

const styles = {
    container:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
    }
  }