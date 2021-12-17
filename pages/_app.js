import '../styles/globals.css'
import { useUser } from '../context/UserContext'
import React, { useEffect, useState } from "react"
import { ItemContext } from '../context/ItemContext';
import { UserContext } from '../context/UserContext'

function MyApp({ Component, pageProps }) {


  const [user, setUser] = useState({
    name: "Sam",
    cart: []
  })
  const userValue = {
    user, setUser
  }


  const [items, setItems] = useState([
    { 
      name: 'Long Sleeve', 
      img: '/longSleeve.jpg',
      stock: 20,
      price: 60
    },
    { 
      name: 'Sweat Pants', 
      img: '/sweatPants.jpg',
      stock: 5,
      price: 85
    },
    { 
      name: 'Sweat Shirt', 
      img: '/sweatShirt.jpg',
      stock: 10,
      price: 20
    },
    {
      name: 'St', 
      img: '/sweatShirt.jpg',
      stock: 10,
      price: 20
    }
    
  ])

  
  const itemsValue = { items, setItems }

  return (
    <UserContext.Provider value={userValue}>
    <ItemContext.Provider value={itemsValue}>
      <Component {...pageProps} />
    </ItemContext.Provider>
  </UserContext.Provider>
  )
}



export default MyApp
