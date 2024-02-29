import React from 'react'
import Bagan from './bagan.jpg'



//import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Home = () => {
  return (
    <div>
     
      <img className='homeimage' src={Bagan} style={{ width: '100%' , height: '100%', opacity: '0.6' }} data-aos="fade-up"/>
     
      {/* <Swiper >
      <img src={festival} />
    <img src={One}/>
    <img src={Two} />
  </Swiper> */}
   <div className="text-overlay">
          <h1 className='textdark'>Welcome from the blog</h1>
          
        </div>
    </div>
  )
}

export default Home
