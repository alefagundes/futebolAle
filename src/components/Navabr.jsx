import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { FaFutbol } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Link to="/" className={style.logo}>
        Ale
        <span>
          Futebol
          <FaFutbol />
        </span>
      </Link>
      <ul>
        <Link to="/confrontos">Confrontos</Link>
        <Link to="/campeonato">Campeonato</Link>
      </ul>
    </nav>
  )
}

export default Navbar
