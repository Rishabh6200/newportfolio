import React from 'react'
import '../assets/css/About.css'
import proImg from '../assets/images/mytransperant.png'
import PageHeading from '../components/PageHeading'


const About = () => {
  return (
    <>
      <div className="cont">
        <div className="abs">
          
          <PageHeading heading='ABOUT' />

          <div className="container">

            <div className="pera">
              <p>Hi, I’m Rishabh Chauhan, a 21-year-old graduate from G.P.G.C Bilaspur, Himachal Pradesh. I have a passion for mobile games and enjoy playing them in my spare time. I also like to learn new skills and explore new technologies. I have completed a web development course and I am a fresher. I am always looking for new challenges and opportunities to grow as a professional. I am eager to work with clients who share my vision and values. If you are interested in collaborating with me, please feel free to contact me anytime.
                <span>
                 - Thank you for visiting my portfolio!
                </span>
              </p>
            </div>
            <div className="img">
              <div className="box-img">
                <img src={proImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About