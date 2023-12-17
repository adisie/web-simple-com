import {motion} from 'framer-motion'
import Typed from 'react-typed'

import myImage from '../assets/images/user-imgs/addis-1.jpg'

const Home = () => {
  return (
    <div className="home-main-container">
      <div className="sub-container home-sub-container">
        <div className="text-container">
          <div className="txt-container">
            <span>Hi, there !</span>
            <span className="username-span">I'm <span className="name">Addis Fenta</span></span>
            <span className='professions'>
              <Typed 
                strings={["Backend Developer","UI/UX Designer","Freelancer"]} 
                typeSpeed={64} 
                backSpeed={33} 
                loop
              ></Typed>
            </span>
            <p>
              MERN stack developer, with greate experience in both frontend and backend Developement.
            </p>
            <div className="btns">
              <motion.button 
                initial={{
                  opacity: 0,
                  scale: .75
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: .75
                }}
              >watch more</motion.button>
            </div>
          </div>
        </div>
        <div className="img-container">
          <div className="img">
            <img src={myImage} alt='uer-profile'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
