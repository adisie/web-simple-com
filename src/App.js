import {Routes,Route} from 'react-router-dom'

import Header from "./components/Header"
import Home from "./pages/Home"

import './assets/css/index.css' 

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
