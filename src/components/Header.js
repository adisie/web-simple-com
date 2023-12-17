
import {NavLink} from 'react-router-dom'
import { FiSearch } from "react-icons/fi"


const Header = () => {
  return (
    <header>
        <div className="sub-container sub-header">
            <div className="site-logo">
                <NavLink to='/' className='site-logo-link'>addisPictures</NavLink>
            </div>
            <div className="search-bar-container">
                <div className="search-container">
                    <input type="text" placeholder='search' />
                    <button><FiSearch /></button>
                </div>
            </div>
            <nav className="navigation">
                <ul>
                    <li>
                        <NavLink to='/' className='link'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/services' className='link'>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to='/skills' className='link'>Skills</NavLink>
                    </li>
                    <li>
                        <NavLink to='/projects' className='link'>Projects</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header
