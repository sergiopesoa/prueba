import React, { useState , useContext } from "react";
import { Link } from "react-router-dom";
import {ItemCount} from '../ComponenteContador/ItemCount'
import '../ComponenteContador/ItemCount.css'
import { Context } from "../../Context/CustomProvider";


export const ItemDetail =(props) => 
{ 
const [showItemContador , setShowItemContador] = useState(true);
const {addItem} = useContext (Context);


  const onAdd = (contador) => {
   addItem(props, contador);
    setShowItemContador (false);

  };

  return (

<>
<div className="container">
  <div className="row">
    <div className="col-md-12">
       <img src= {props.detalles.imagen} alt="imagen cerámica"/>
  <div class="card-body">
    <h5 class="card-title">categoria   {props.detalles.categoriaId}</h5>
    <p class="card-text">Pieza artesanal realizada totalmente a mano.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{props.detalles.name}</li>
    <li class="list-group-item">precio: $ {props.detalles.precio} </li>
    <li class="list-group-item">stock:  {props.detalles.stock}</li>
  </ul>
{showItemContador ? ( 
<ItemCount  stock = {props.detalles.stock} initial = {1} onAdd = {onAdd}/>
) : (
  <Link to= {'/cart'}>
  <button >Finalizar conpra</button>
  </Link>
)

}

 
   </div>
  </div>
</div>



</>
  )
}

