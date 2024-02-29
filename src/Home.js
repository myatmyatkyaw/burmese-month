import React from 'react'
import Bagan from './bagan2.jpg'



//import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Home = () => {
  return (
    <div class="relative-container">
  <img src={Bagan} alt="Bagan" class="responsive-image" />
  <div class="text-overlay">
    <h1 class="textdark" data-aos="zoom-in">Welcome from the blog</h1>
  </div>
</div>
  )
}

export default Home
