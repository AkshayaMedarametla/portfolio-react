import React from 'react'
import './contact.css'
import LinkedIn from '../../assests/linkedin.png'
import Email from '../../assests/email.png'


const Contact = () => {
  return (
    <div className='Contact' id='contact'>
      <div className='Contitle'><h2>Contact Me</h2></div>
      <div className='Condata'>
        <div className="contleft">
          <div className="lefdata">
            <h3>Let’s Build Something Awesome Together!</h3>
            <p>I'm actively seeking full-time. Whether you have a question or just want to say hi, feel free to drop a message!</p>
          </div>
          <div className="sm">
            <a href="mailto:akshayamedarametla@gmail.com" >
              <img src={Email} alt="" className="sm1" />

            </a>
            <a href="https://www.linkedin.com/in/akshayamedarametla/">
              <img src={LinkedIn} alt="" className='sm1' />
            </a>
          </div>
          <a href='https://wa.me/919392859442'><button class="styled" type="button">Contact Me</button></a></div>
        <div className="review">
          <div className="l2">
            <div className="l21">
              <div className="l21d">
                <p>"Working with Akshaya has been an absolute game-changer for our digital presence. Her creativity, consistency, and deep understanding of audience
                  engagement helped us elevate our brand on social media."</p><h3>- Saketh</h3>
              </div>
            </div>
            <div className="l22">
              <div className="l22d">
                  <p>"From managing tight deadlines to brainstorming viral campaigns, Akshaya handles it all with calm confidence.
                     Her leadership in our social efforts has truly made a difference."</p><h3>- Rajesh</h3>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact