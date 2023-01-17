import { Link } from "react-router-dom"
import './Menu.css'

export function Menu(){

    return(
        <>
<nav className="navbar navbar-expand-lg menu navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Reik</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="historia">Historia</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="integrantes">Integrantes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="music">Music</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="mercancia">Mercancia</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
}