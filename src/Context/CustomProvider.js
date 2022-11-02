import React, {createContext} from 'react'

export const Context = createContext ();

export const CustomProvider = () => {
    console.log(Context);
  return (
    <div>CustomProvider</div>
  )
}
