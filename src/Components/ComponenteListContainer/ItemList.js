import React from "react";

import {Item} from "./Item";


export const ItemList = (props) => {
    console.log(props)
    return (


        <>
            {
            
            props.ceramica.map((producto) => {
             return   <Item pieza={producto}/>
            })
            
            }
            
        </>

    );
   

}