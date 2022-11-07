import React from "react";
import {Item} from "./Item";




export const ItemList = (props) => {
    
    return (
        
        <div style={styles.container}>
        
        <>
            {
                          
             props.Productos.map((producto) => {
             return   <Item key = {producto.categoriaId} pieza={producto} urlPieza={ "/productos/"+ producto.categoriaId}/>
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

  // `/productos/`