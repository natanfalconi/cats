import './styled.css'
import { FaCat } from 'react-icons/all'
import { Link } from 'react-router-dom'

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
              <Link to="/cats">Veja Mais</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>


  )
}