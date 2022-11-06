import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




export const Item = (props) => {
  return (
    
        
   
    <Card sx={{ maxWidth: 245 }}style={styles.container}>
      <CardMedia
        component="img"
        height="200"
        image={props.pieza.imagen}
        alt="pieza generica"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={styles.title}>
        precio : ${props.pieza.precio}  
        </Typography>
        <Typography variant="h5" color="text.primary">
        {props.pieza.name} 
        </Typography>
      </CardContent>
      <CardActions>
      <Link to= {props.urlPieza}>
           <Button size="small">Ver detalles</Button>
        </Link>
      </CardActions>
    </Card>
  );
  
}

const styles = {
       container: {
      width: window.innerHeight > 900 ? "25%" : "90%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: 20,
      backgroundColor: "#ff9399",
    },
    title: {
      textOverflow: "ellipsis",
      overflow: "hidden",
      height: 100,
    },
  };

 