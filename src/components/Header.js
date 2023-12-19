import {NavLink} from 'react-router-dom'
import {motion} from 'framer-motion'

const Header = () => {

    // active link style
    const activeLinkStyle = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }
  return (
    <header>
        <div className="sub-container sub-header">
            <motion.div className="site-logo" 
                initial={{y: "-100vh",opacity: 0}}
                animate={{y: 0,opacity: 1}}
                transition={{type: 'spring',stiffness: 23}}
            >
                <NavLink className='home-link'>addisPictures</NavLink>
            </motion.div>
            <motion.nav className="navigations" 
                initial={{x: '-100vw'}}
                animate={{x: 0}}
                transition={{duration: 1.5}}
            >
                <ul>
                    <li>
                        <NavLink to='/' className='link' style={activeLinkStyle}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/experiences' className='link' style={activeLinkStyle}>Experience</NavLink>
                    </li>
                </ul>
                <div className='contact-link-container'>
                    <NavLink className='contact-link'>Contacts</NavLink>
                </div>
            </motion.nav>
        </div>
    </header>
  )
}

export default Header
