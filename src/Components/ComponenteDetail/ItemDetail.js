import React, { useState , useContext } from "react";
import { Link } from "react-router-dom";
import {ItemCount} from '../ComponenteContador/ItemCount'
import '../ComponenteContador/ItemCount.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Context } from "../../Context/CustomProvider";


export const ItemDetail =(props) => 
{ 
const [showItemContador , setShowItemContador] = useState(false);
const {addItem} = useContext (Context);


  const onAdd = (contador) => {
   addItem(props, contador);
    setShowItemContador (true);

  };

  return (
<>

<Card sx={{ maxWidth: 350 }}style={styles.container}>
      <CardMedia
        component="img"
        height="200"
        image={props.detalles.imagen}
        alt="pieza ceramica"
      />
      <CardContent>
      <Typography variant="h5" color="text.primary">
        {props.detalles.name} 
        </Typography>

        <Typography gutterBottom variant="h5" component="div" style={styles.title}>
        precio : ${props.detalles.precio}  
        </Typography>
        <Typography variant="h5" color="text.primary">
         stock  : {props.detalles.stock}
        </Typography>

        <Typography variant="h5" color="text.primary">
         Pieza hecha totalmente a mano , esmaltada en forma individual.
        </Typography>
      </CardContent>
    </Card>

{! showItemContador ? ( 
<ItemCount  stock = {props.detalles.stock} initial = {1} onAdd = {onAdd}/>
) : (
  <Link to= {'/cart'}>
  <button >Finalizar conpra</button>
  </Link>
)

}
</>
  )
}

const styles = {
  container: {
 width: window.innerHeight > 900 ? "25%" : "90%",
 flexDirection: "column",
 justifyContent: "center",
 alignItems: "center",
 margin: 30,
 backgroundColor: "#ff9399",
},
title: {
 textOverflow: "ellipsis",
 overflow: "hidden",
 height: 100,
},
};
