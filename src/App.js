import {Route, Switch} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
)

export default App

// --------------------------------------------------

// import Popup from 'reactjs-popup'

// import 'reactjs-popup/dist/index.css'

// import './App.css'

// const overlayStyles = {
//   backgroundColor: '#ffff',
// }
// const App = () => (
//   <div className="popup-container">
//     <Popup
//       modal
//       trigger={
//         <button type="button" className="trigger-button">
//           Trigger
//         </button>
//       }
//       overlayStyle={overlayStyles}
//     >
//       <p>React is a popular and widely used programming language</p>
//     </Popup>
//   </div>
// )

// export default App
