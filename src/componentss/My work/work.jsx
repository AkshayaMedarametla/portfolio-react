import React from 'react'
import './work.css'
import Img1 from "../../assests/ml.jpeg"
import Img2 from "../../assests/wd.jpg"
import Img3 from "../../assests/pf.jpeg"

const Work = () => {
  const wokData  = [
    {
      image:Img1,
      Name:"Weather Detection Based on Images ",
      description:"Machine-Learning based System",
      points:[
        " Created a machine learning-based system to detect weather conditions from images with 85%accuracy, leveraging supervised learning techniques and image classification models"
      ]
      
    },
    {
      image:Img2,
      Name:"Dip'n Sip- Drive-In and Takeaway Restaurant",
      description:"Web Page",
      points:[
        " Developed a fully responsive website using HTML and CSS, supporting 100+ pre-orders daily, enhancing customer convenience, and reducing wait times."
      ]
    },
    {
      image:Img3,
      Name:"Dip'n Sip- Drive-In and Takeaway Restaurant",
      description:"Web Page",
      points:[
        " Developed a fully responsive website using HTML and CSS, supporting 100+ pre-orders daily, enhancing customer convenience, and reducing wait times."
      ]
    }
  ]
  return (
    <div className='Work'>
      <div className='WorkTitle'><h2>My Work</h2></div>
      <div className='workdata'>
        {wokData.map((wok , index) =>(
          <div key={index} className={`workitem work${index}`}>
            <img src={wok.image} alt={wok.Name} className='workimg' />
            <h2>{wok.Name}</h2>
            <h3>{wok.description}</h3>
            <p>{wok.points}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Work