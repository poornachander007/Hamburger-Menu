// Write your code here
import './index.css'
import Header from '../Header'

const homeUrl = 'https://assets.ccbp.in/frontend/react-js/home-lg-img.png'
//  alt should be home
const Home = () => (
  <div className="Home_container">
    <Header />
    <div className="content_container">
      <img
        height={700}
        width={900}
        className="home_image"
        alt="home"
        src={homeUrl}
      />
    </div>
  </div>
)

export default Home
