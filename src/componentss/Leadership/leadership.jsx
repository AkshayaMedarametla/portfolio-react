import React from 'react'
import './leadership.css'
import Img from '../../assests/lead.png'

const Leadership = () => {
  return (
    <div className='Leadership'>
        <div className='Leadtitle'><h2>Leadership and Activities</h2></div>
        <div className='leaddata'>
            <div className='leadd'>
                <ul>
                    <li><b>IoT Hackathon Coordinator:</b> Coordinated an IoT hackathon with 50+ participants, managing event logistics and ensuring smooth execution </li>
                    <li><b>President, Yantrikee (Technical Club):</b> Spearheaded the club’s initiatives, driving membership by 30% through successful workshops and networking events. </li>
                    <li> <b>Event Management:</b> Led 10+ college events, focusing on planning, logistics, and team coordination.  </li>
                    <li><b>Designing and Creativity: </b>Designed 20+ unique dress models and created artwork </li>
                </ul>
            </div>
            <div className='leadimg'>
                <img src={Img} alt="" className="leadimg" />
            </div>
        </div>
    </div>
  )
}

export default Leadership