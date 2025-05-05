import React from 'react'
import './achievements .css'
import Img from'../../assests/achieve.png'


const Achievements = () => {
  return (
    <div className='Achievements'>
      <div className='Achtitle'><h2>My Achievements</h2></div>
      <div className='Achitems'>
        <div className='Achleft'>
          <img src={Img} alt="" className="achimg" />
        </div>
        <div className='Achright'>
          <ul>
            <li><b>Amazon AWS Certificate:</b>Proficient in cloud computing and infrastructure.</li>
            <li><b>Kaggle Python Certificate: </b>Skilled in Python programming, data analysis, and machine learning.  </li>
            <li><b>Amazon AWS Certificate:</b>Proficient in cloud computing and infrastructure.</li>
            <li><b>Cybersecurity Analysis & Design (NASSCOM Golden Certificate):</b> Designed secure systems and completed 10+ case studies on risk assessment and mitigation strategies </li>
            <li><b>Machine Learning (NASSCOM Golden Certificate): </b>Advanced knowledge in machine learning algorithms.</li>
            <li><b>Smart Interviews Training:</b> Solved 50+ coding challenges and enhanced behavioral interview preparation through mock sessions.  </li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Achievements