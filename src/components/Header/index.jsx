import './styled.css'
import { FaCat, AiFillLinkedin, FiInstagram, AiFillFacebook } from 'react-icons/all'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header>
      <div className="content" >
        <div className="logo" >
          <Link to="/">
            <FaCat />
          </Link>
        </div>
        
        <Link to="/About" >Adote</Link>

        <nav className="links">
          <ul className="menu">
            <li>
              <a href="">
                <AiFillLinkedin />
              </a>
              <a href="">
                <FiInstagram />
              </a>
              <a href="">
                <AiFillFacebook />
              </a>

            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}