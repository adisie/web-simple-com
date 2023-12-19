import {Routes,Route} from 'react-router-dom'

// components
import Header from './components/Header'

// pages
import Home from './pages/Home'
import Experiences from './pages/Experiences'

const App = () => {
  return (
    <div className='main-container'>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/experiences' element={<Experiences />} />
      </Routes>
    </div>
  )
}

export default App
