// Write your code here

import './index.css'
import Header from '../Header'

const aboutUrl = 'https://assets.ccbp.in/frontend/react-js/about-lg-img.png'
//  alt should be about

const About = () => (
  <div className="Home_container">
    <Header />
    <div className="content_container">
      <img
        height={700}
        width={900}
        className="home_image"
        alt="about"
        src={aboutUrl}
      />
    </div>
  </div>
)

export default About
