import './styled.css'
import { FaCat, AiFillLinkedin, FiInstagram, AiFillFacebook } from 'react-icons/all'

export function Header() {
  return (
    <header>
      <div className="content" >
        <div className="logo" >
          <a href="/">
            <FaCat />
          </a>
        </div>

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