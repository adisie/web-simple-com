import {Routes,Route} from 'react-router-dom'

// components
import Header from './components/Header'

// pages
import Home from './pages/Home'
import Services from './pages/Services'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import NoPage from './pages/NoPage'

const App = () => {
  return (
    <div className="parent-container">
      <div className="container">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/*' element={<NoPage/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
