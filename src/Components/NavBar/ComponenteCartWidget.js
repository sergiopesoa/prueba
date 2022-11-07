import React , { useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Context } from '../../Context/CustomProvider';


export const ComponenteCartWidget = () => {

  const {qty} = useContext(Context)
  
  const nada = (qty !== 0 ? qty : '' );

  return ( 
    <>

    <p>{nada}</p>
    <
    ShoppingCartIcon  sx={{ color: 'rgb(240, 98, 146)' }}
       fontSize = "large" / >
    </>
    
  )
}