import React , {useContext} from 'react'

import { Context } from '../../Context/CustomProvider'
import { Link } from 'react-router-dom';


export const Cart= () => {
    const { cart } = useContext (Context);
    const { qty } = useContext (Context);
    const {total} = useContext (Context);
    const { addItem} = useContext (Context) ;
    const {deleteItem} = useContext (Context) ;
    const { clear } = useContext (Context);
    return (
        <>
        { cart.length === 0 ? (
            <h1>No has agregado ningun producto , ingresa <Link to ="/">Aqui</Link></h1>
        ) : (
       
            <>
            { cart.map ((props)=> (
                <h1 key={props.detalles.id}> {qty} {props.detalles.name} $$ {props.detalles.precio} {total}</h1>
                    
            ))}
            <button onClick = {addItem}>agregar mas productos</button>
            <button onClick = {deleteItem }>eliminar producto</button>
           <button onClick = {clear} >vaciar carrito </button>
           
            </>
        )}
        </>
    );
 };

