import React from 'react'
import Bagan from './bagan2.jpg'



//import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Home = () => {
  return (
    <div>

      <img className='homeimage' src={Bagan} style={{ width: '100%', height: '100%', opacity: '0.9' }} data-aos="fade-up" />

      {/* <Swiper >
      <img src={festival} />
    <img src={One}/>
    <img src={Two} />
  </Swiper> */}
      <div className="text-overlay">
        <h1 className='textdark' data-aos="zoom-in">Welcome from the blog</h1>

      </div>

      
    </div>
  )
}

export default Home
