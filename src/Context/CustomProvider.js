import React, { useState , createContext } from 'react'
import { useEffect } from 'react';

export const Context = createContext ();
export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState ([]);
  const [ qty , setQty] = useState (0);
  const [total , setTotal] = useState (0);
  
  useEffect(() =>{
    let cantidad = 0 ;
    let totalCosto = 0 ;
    cart.forEach(item => {
     cantidad += item.cantidad;
     totalCosto += (item.precio * item.cantidad);
    });
    setQty(cantidad);
    setTotal(totalCosto);
   },[cart]);


const addItem =(item, cantidad) =>{
 if (isInCart (item.id)){
  
  const actualizado = cart.map ( (producto)=> {
  if(producto.id === item.id){
    producto.cantidad += cantidad ;
   }
   return producto;
  });
  setCart(actualizado);
} else{
  setCart([...cart,{...item , cantidad}]);
}
setQty(qty + cantidad);
setTotal(total + (item.precio * cantidad));

};

const deleteItem = (id) => {
const found = cart.find(producto => producto.id === id );
setCart (cart.filter (item => item.id !== id));
setQty(qty - found.cantidad);
setTotal(total - (found.precio + found.cantidad));

};



const isInCart = (id) => cart.some (item => item.id === id)
console.log(cart);
const clear = () => {
  setCart([]);
  setQty(0);
  setTotal(0);
}




return <Context.Provider value={{ cart, qty , total , addItem , deleteItem , clear }}>{children}</Context.Provider>;
    
    
  
}
