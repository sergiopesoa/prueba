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
            { cart.map ((detalles)=> (
               
                        <>
                           <div key={detalles.id}>
                           <h1 >
                                {" "}
                                {qty} {detalles.name} precio unitario $ {detalles.precio}{" "} precio total:$
                                {total}
                            </h1>
                            <button onClick= {() =>deleteItem(detalles.id)}>
                                eliminar producto
                            </button>

                           </div>
                           
                          
                        </>
                    ))}
        
           <button onClick = {clear} >vaciar carrito </button>
           
           
           
            </>
             
        )}
         <Link to="/">
        <button>agregar otro producto</button>
        </Link>

        </>
    );
 };

