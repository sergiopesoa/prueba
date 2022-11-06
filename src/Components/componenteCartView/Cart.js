import React , {useContext} from 'react'
import { Context } from '../../Context/CustomProvider'
import { Link } from 'react-router-dom';


export const Cart= () => {
    const { cart } = useContext (Context);
    return (
        <>
        { cart.length === 0 ? (
            <h1>No has agregado ningun producto , ingresa <Link to ="/">Aqui</Link></h1>
        ) : (
            <>
            { cart.map ((props)=> (
                <h1 key={props.detalles.id}> {props.detalles.name}{props.detalles.cantidad} $$ {props.detalles.precio}</h1>
                    
            ))}
            
           
            {/* <h2>Gracias por tu compra </h2> */}
            </>
        )}
        </>
    );
 };