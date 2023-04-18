// Write your code here
import './index.css'
import Header from '../Header'

const notFoundUrl = 'https://assets.ccbp.in/frontend/react-js/not-found-img.png'
//  alt should be not found
const NotFound = () => (
  <div className="Home_container">
    <Header />
    <div className="not_found_content_container">
      <img
        height={400}
        width={400}
        className="home_image"
        alt="not found"
        src={notFoundUrl}
      />
      <h1 className="heading">Lost Your Way?</h1>
      <p className="description">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)

export default NotFound
