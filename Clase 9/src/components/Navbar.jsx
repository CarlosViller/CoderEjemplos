import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <Link to="/">
        <img width={100} src="/logo.png" />
      </Link>
      <nav>
        <NavLink to="/categoria/camisas">Camisas</NavLink>
        <NavLink to="/categoria/pantalones">Pantalones</NavLink>
        <NavLink to="/categoria/calzado">Calzado</NavLink>
      </nav>
    </header>
  );
}
