import React from 'react'
import './exp.css';
import Img1 from '../../assests/dm.jpeg'
import Img2 from '../../assests/sm.png'

const Exp = () => {
    
    const ExperienceData = [
        {
            Name: "Orient Spectra Consultancy" ,
            image:Img1,
            Role: "Social Media Mangement",
            Duration: "6 Months",
            points: "Created content, designed creatives, and managed posts on Instagram, Facebook, LinkedIn, and YouTube. "
        },
        {
            Name: "Startup Yo" ,
            image:Img2,
            Role: "Digital Marketing Team",
            Duration: "2 Months",
            points: "Handled brand engagement by answering queries on Reddit, Quora, etc.. "
        }
    ]

  return (
    <div className='Exp'>
        <div className='Exptitle'><h2> My Experience</h2></div>
        <div className='Expdata'>
            {ExperienceData.map((expi , index) =>(
                <div key={index} className={`expitem exp${index}`}>
                    <img src={expi.image} alt={expi.Name} className='expimg'/>
                    <h2>{expi.Name}</h2>
                    <h3>{expi.Role} - {expi.Duration}</h3>
                    <p>{expi.points}</p>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Exp