import { NavLink } from "react-router-dom"
import {motion} from 'framer-motion'

// images
import myPicture from '../assets/images/addis-1.jpg'

const Home = () => {
  return (
    <div className="sub-container sub-home">
        <div className="home">
          <motion.div className="text-con" 
            initial={{x: "100vw",opacity: 0,scale: 0}}
            animate={{x: 0,opacity: 1,scale: 1}}
            transition={{type: 'spring',stiffness: 16}}
          >
            <span className="intro">Hi, There !</span>
            <span className="username-span">I'm <span className="name">Addis Fanta</span></span>
            <span className="profession">Experienced <span className="skill">Software Enginer</span></span>
            <p>
              Full-Stack Developer, 3+ years of experience on both Frontend and Backend Development. 
            </p>
            <div className="btn-containers">
              <NavLink className='cv-link'>Download CV</NavLink>
            </div>
          </motion.div>
          <motion.div className="img-con"
            initial={{scale: 0,opacity: 0}}
            animate={{scale: 1,opacity: 1}}
            transition={{type: 'spring',stiffness: 12,duration: 1}}
          >
            <div className="image-container">
              <motion.img src={myPicture} alt="" 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: .65, duration: 1.3}}
              />
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Home
