import React , {useState , useContext } from 'react'
import { Context } from '../../Context/CustomProvider'
import { Link } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { collection , addDoc , serverTimestamp , doc , updateDoc } from 'firebase/firestore';
import { swal } from 'sweetalert2'
import { async } from '@firebase/util';


export const Cart= () => {
    const { cart } = useContext (Context);
    const { qty } = useContext (Context);
    const {total} = useContext (Context);
    const { addItem} = useContext (Context) ;
    const {deleteItem} = useContext (Context) ;
    const { clear } = useContext (Context);
    const [load , setLoad] = useState ();
    const [orderId , setOrderID] = useState ();
    

    const mostrarAlerta = () => {
        alert ("Has concretado la compra. Gracias por confiar en nosotros");
     };
       const generateOrder = async(data) =>{
        setLoad(true)
        try {
          
            const col = collection(db, "ventas")
            const order = await addDoc (col, data)
            setOrderID(order.id)
            clear()
            setLoad(false)
            } catch (error) {
                console.log(error)
            }
    }

        function Form() {
            const [values, setValues] = React.useState({
              email: "",
              nombre: "",
              tarjeta: "",
            });
          
            function handleSubmit(evt) {
            evt.preventDefault();
            const dia = new Date ()
            const total = getTotal ()
            const items = cart.map(detalles =>{ 
              return {
                id: detalles.id, nombre: detalles.name , precio: detalles.precio , cantidad : detalles.cantidad}
              
              })
            const data = {values,items,dia,total}
            console.log("data", data)
            generateOrder(data)
            mostrarAlerta ()
            
            }
          
            function handleChange(evt) {
              const { target } = evt;
              const { name, value } = target;
              const newValues = {
                ...values,
                [name]: value,
              };
          
              setValues(newValues);
              
            }
          
            return (
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <label htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={values.nombre}
                  onChange={handleChange}
                />
                 <label htmlFor="tarjeta">Tarjeta</label>
                <input
                  id="tarjeta"
                  name="tarjeta"
                  type="number"
                  value={values.tarjeta}
                  onChange={handleChange}
                />
                <button type="submit">Finalizar Compra</button>
              </form>
            );
           
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
           
            <Form />
           
           
            </>
           
        )}
         <Link to="/">
        <button>agregar producto</button>
        </Link>
        </>
    );
 };

