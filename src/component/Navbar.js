import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    cryptocoin
                                </Link>
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link" to="/todo">
                                    todo
                                </Link>
                            </li> 
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar