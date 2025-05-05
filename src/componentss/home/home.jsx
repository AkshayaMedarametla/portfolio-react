import React from 'react'
import Img from '../../assests/akshaya.jpg'
import './home.css'


const Home = () => {
  return (
    <div className='Home'>
      <div className='img'>
        <img src={Img} alt="" className="photo" />
      </div>
      <div className='text'>
        <h2>Hello,</h2>
        <h1>I'm Akshaya Medarametla </h1>
      </div>
      <div className='text2'> <h3>Exploring Marketing | Social Media Specialist </h3></div>
    </div>
  )
}

export default Home