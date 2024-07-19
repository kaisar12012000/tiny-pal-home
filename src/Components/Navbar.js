import React from 'react'
import { ReactComponent as LogoSVG }  from "../assets/images/logo.svg";
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar(props) {
    const navigate = useNavigate()
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                {/* <img src={LogoSVG} alt="logo" /> */}
                <LogoSVG />
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  </ul>
                <div className="d-flex">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="link nav-link" to="#">Products</Link></li>
                        <li className="nav-item"><Link className='link nav-link' to="/about-us">About us</Link></li>
                        <li className="nav-item"><button onClick={() => props.setShowNotifyMe(true)} className="btn btn-outline-success black-btn" type="submit">Notify me</button></li>
                    </ul>
                </div>
              </div>
            </div>
        </nav>
    )
}
