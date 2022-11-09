import React , {useState , useContext } from 'react'
import { Context } from '../../Context/CustomProvider'
import { Link } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { collection , addDoc , serverTimestamp , doc , updateDoc } from 'firebase/firestore';
import { swal } from 'sweetalert2'


export const Cart= () => {
    const { cart } = useContext (Context);
    const { qty } = useContext (Context);
    const {total} = useContext (Context);
    const { addItem} = useContext (Context) ;
    const {deleteItem} = useContext (Context) ;
    const { clear } = useContext (Context);
    
    
    const mostrarAlerta = () => {
        alert ("Has concretado la compra. Gracias por confiar en nosotros");
     };

     const [handleInputChange , setHandleInputChange] = useState ([]);
     const handleSubmit = () => {
        return (
      <form onSubmit={handleSubmit}>
<input 
type="text"
name="nombre" 
placeholder= "nombre" 
value="{nombre}" 
onChange={handleInputChange} 
required
/>
<br/>
<input 
type="email"
name="Email" 
placeholder= "Email" 
value="{Email}" 
onChange={handleInputChange} 
required
/>
<br/>
<input 
type="number"
name="Numero tarjeta" 
placeholder= "Numero Tarjeta" 
value="{Numero Tarjeta}" 
onChange={handleInputChange} 
required
/>
<br/><br/>
<input 
type="submit"
value="finalizar compra" 
className="btn btn succes"
/>
</form>
      
 )   };
  setHandleInputChange (),
[];







 const comprador ={
    nombre : 'juan' ,
    apellido : 'perz',
    email : 'dd@ddd'
};

    const finalizarCompra =() => { mostrarAlerta ();
        const ventasCollection = collection (db , "ventas");
        addDoc(ventasCollection, {
            comprador,
            items: cart ,
            total: total ,
            date : serverTimestamp ()
        })
        
    }
     return (
        <>
        { cart.length === 0 ? (
            <h1>No has agregado ningun producto , ingresa <Link to ="/">Aqui</Link></h1>
        ) : (
       
            <>
            { cart.map ((detalles)=> (
               
                        <>
                           <div key={detalles.id}>
                           <h3 >
                                {" "}
                             cantidad: {detalles.cantidad}........producto:{detalles.name}............ precio unitario $ {detalles.precio}{" "}
                            </h3>
                            <h4>
                            total compra:${total}
                            </h4>
                            <button onClick= {() =>deleteItem(detalles.id)}>
                                eliminar producto
                            </button>
                         
                           </div>
                           
                        </>
                        
                    ))};
                
           <button onClick = {clear} >vaciar carrito </button>
           
           <button onClick = {finalizarCompra }>finalizar compra</button>
           
           {/* <ComponenteEventos/> */}
           
            </>
           
        )}
         <Link to="/">
        <button>agregar producto</button>
        </Link>
        </>
    );
 };

