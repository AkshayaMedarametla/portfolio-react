import './intro.css'
import React, { useEffect, useState } from 'react';
import Grad from '../../assests/graduate.png'

const Intro = () => {
  const [inView, setInView] = useState(false);

  // Detect when the element is in the viewport
  const handleScroll = () => {
    const element = document.getElementById('about-me');
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setInView(true);
    } else {
      setInView(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="about-me" className={`right-side ${inView ? 'animate' : ''}`}>
      <h2>About Me</h2>
      <div className='introdata'>
        <div className='gimage'>
          <img src={Grad} alt="" className="grad" />
        </div>
        <div className='idata'>
          <p>A Tech-savvy digital enthusiast with a passion for blending creativity with code. I specialize in social media management,
            content creation, and using data-driven strategies to build meaningful digital experiences.I’ve worked hands-on with brands
            like StartupYo and Orient Spectra Abroad Consultancy, where I crafted content, managed multi-platform campaigns, and directly
            engaged with audiences across Instagram, LinkedIn, YouTube, Reddit, and more.</p>
            <p>With technical skills in Java, Python, JavaScript, HTML, and CSS, plus certifications in AWS, Machine Learning, and Cybersecurity,
               I bring a unique perspective to the digital marketing world — one where design meets functionality.</p>
            <p>As the President of Yantrikee, I’ve led teams, organized hackathons, and learned what it takes to bring people and ideas together to create impact.</p>
            <p>Now, I’m actively looking for opportunities in the digital marketing field — whether it's full-time, freelance, or collaborative projects.
              If you're looking for someone who understands both algorithms and audiences, let’s connect.</p>
        </div>
      </div>

    </div>
  );
};

export default Intro;
