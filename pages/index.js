import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Auth } from '@supabase/ui'
import React, { useEffect, useState } from "react";
import { useItems } from '../context/ItemContext'
import { useUser } from '../context/UserContext' 

export default function Home() {

  const { shopItems } = useItems()
  return (
<div class="wrapper">  
  <header>
    <div class="topnav">
            <a class="motomf" href="#motomf">motomf</a>       
    </div>
  </header>

  <div class = "navBar" >
      <ul>
      <li><a href="default.asp">Home</a></li>
      <li><a href="news.asp">News</a></li>
      <li><a href="contact.asp">Contact</a></li>
      <li><a href="about.asp">About</a></li>
      <li> cart
        
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        
        </li>
      </ul>
    </div>

  <div class = "bikeIMG">
    <img src="\motionPic.jpg"  alt="Girl in a jacket" width="100%" height="100%"></img>
    
  </div>

  <div class = "missionStatement">
     <p>
       We are selling this bike for charity!
     </p>
      
    </div>


<div class = "shop">

  {/* TODO: Map through the items in context 
          * to display an ItemCard with the data for each
          */
  /*
          shopItems.map((item, i) => (
            <ItemCard 
            key={i}
            name={item.name}
            img={item.img}
            stock={item.stock}
            price={item.price}
            add={addToCart}
            />
          ))*/
          }
 

</div>

  </div>





 


  )

  
}
