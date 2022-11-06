
import React, {useState} from 'react';
import './ItemCount.css';

export const ItemCount = ({ stock, initial, onAdd}) => {
  const [contador, setContador] = useState(1);

  const [contador1, setContador1] = useState(1);

  const handlerClickSumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    
  };
}
   const handlerClickRestar = () => {
    if (contador > initial) {
      setContador(contador - 1);
    
  };
}

  const handlerClickAgregarAlCarrito = () => {
    setContador1(1);
    onAdd(contador);
  };

  return (
   <div className ='botonesItems'>
    <button onClick={handlerClickSumar}> + </button>
    <h2>{contador} </h2>
    <button onClick={handlerClickRestar}> - </button>
    <button disabled={stock===0} onClick={handlerClickAgregarAlCarrito}> Agregar al Carrito </button>
   </div> 
  );
  }
  
  