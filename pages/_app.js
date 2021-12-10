import '../styles/globals.css'
import { useUser } from '../context/UserContext'
import React, { useEffect, useState } from "react"
import { ItemContext } from '../context/ItemContext';


function MyApp({ Component, pageProps }) {


  const [shopItems, setShopItems] = useState([
    { 
      name: 'Snake Plant', 
      img: '/longSleeve',
      stock: 20,
      price: 60
    },
    { 
      name: 'Fiddle Leaf Fig', 
      img: 'sweatPants',
      stock: 5,
      price: 85
    },
    { 
      name: 'Pothos', 
      img: 'sweatShirt',
      stock: 10,
      price: 20
    }
    
  ])

  
  const itemsValue = { shopItems, setShopItems }

  return (
    <ItemContext.Provider value={itemsValue}>
      <Component {...pageProps} />
    </ItemContext.Provider>
  )
}



export default MyApp
