import React , { useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import context from 'react-bootstrap/esm/AccordionContext';
import { Context } from '../../Context/CustomProvider';


export const ComponenteCartWidget = () => {

  const {qty} = useContext(Context)
  return ( 
    <>
    <p>{qty}</p>
    <
    ShoppingCartIcon  sx={{ color: 'rgb(240, 98, 146)' }}
       fontSize = "large" / >
    </>
    
  )
}