import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Auth } from '@supabase/ui'
import React, { useEffect, useState } from "react";
import { useItems } from '../context/ItemContext'
import { useUser } from '../context/UserContext' 
import ItemCard from '../components/ItemCard'



export default function Home() 
{

  
  const { items } = useItems()
  return (



<div class = "outerWraper">
  






<div class = "topWraper">


  <div class="topnav">
    <header>
      <a class="motomf" href="#motomf">MotoMf</a>      
    </header> 

    <div class = "icon">
     
    </div>
  </div>




<div class = "navBar" >
      <ul>
      <li><a href="default.asp">Home</a></li>
      <li><a href="news.asp">News</a></li>
      <li><a href="Contact.asp">Contact</a></li>
      <li><a href="about.asp">About</a></li>

      <li> 
        <div class = "cartWraper">
        <a href="cart.asp"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>ss</a>
        </div>
        </li>

      



      </ul>
</div>

</div>


<div class="wrapper">  

  <div class = "bikeIMG">
        <div class="mottoSpacer">
            
        </div>
    <div class="first-txt">
            Win the Bike of your Dreams
        </div>
  </div>

  <div class = "missionStatement">
     <p>
       We are selling this bike for charity! The specs of this bike are as follows, for information on 
       how the auction works pleaser read below:

       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        The auction will be held on... 
     </p>
      
    </div>

    <div className="iframe-container">
    
    <div className = "videoText">
    live the experience...
    </div>
    
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ivlafsmBwxo" title="YouTube video player" 
      allowfullscreen></iframe>
    </div>
   

<div class = "shop">
  {
  /*
          items.map((item, i) => (
            <ItemCard 
            key={i}
            name={item.name}
            img={item.img}
            stock={item.stock}
            price={item.price}
            //add={addToCart}
            />
          ))*/
  }





 

</div>



<div class = "contact">
     <div class = "contactInfo">
      Contact: 310-424-497
     
     </div>

     <div class = "icons">
       
     <a href="#" class="fa fa-facebook"></a>
     <a href="#" class="fa fa-twitter"></a>
     <a href="#" class="fa fa-instagram"></a>
      </div>
    </div>

  </div>


  </div>


 


  )

  
}
