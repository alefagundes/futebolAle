import style from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Link to="/">
        Ale<span>Futebol</span>
      </Link>
      <ul>
        <Link to="/fases">Fases</Link>
        <Link to="/teste2">teste2</Link>
        <Link to="/teste3">teste3</Link>
      </ul>
    </nav>
  )
}

export default Navbar
