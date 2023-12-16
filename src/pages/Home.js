
import { FiSearch } from "react-icons/fi"

// sub components
import Loader from "./components/Loader"

const Home = () => {
  return (
    <div className="sub-container home-container">
      <Loader />
      <div>
        <div className="search">
          <div className="search-con">
            <input type="text" placeholder="search" />
            <button><FiSearch /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
