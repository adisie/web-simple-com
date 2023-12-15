import {NavLink} from 'react-router-dom'
import { FaSearch } from "react-icons/fa"

const Header = () => {
  return (
    <header>
        <div className="sub-header sub-container">
            <div className="site-logo">
                <NavLink className='home-link'>addis</NavLink>
            </div>
            <div className="search-bar-container">
                <div className="search-container">
                    <input type="text" placeholder='search' />
                    <button><FaSearch /></button>
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink className='link'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='link'>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header
