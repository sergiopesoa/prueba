import React from "react";
import imagen1 from '../../assets/cuenco_medio.jpg'

export const ItemDetail =(props) => 
{ 
  return (

<>
<div className="container">
  <div className="row">
    <div className="col-md-6">
       <img src={imagen1} alt="imagen generica"/>
  <div class="card-body">
    <h5 class="card-title">categoria   {props.detalles.categoriaId}</h5>
    <p class="card-text">Pieza realizada totalmente a mano, posse 12 cm de alto y 15 de diametro.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{props.detalles.name}</li>
    <li class="list-group-item">precio: $ {props.detalles.precio} </li>
    <li class="list-group-item">stock:  {props.detalles.stock}</li>
  </ul>
   </div>
  </div>
</div>



</>
  )
}
