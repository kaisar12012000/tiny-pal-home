import React, {useState} from 'react'
import { ReactComponent as LogoSVG }  from "../assets/images/logo.svg";
import { Link, useNavigate } from 'react-router-dom';
import { SignUp } from '../App';

export default function Navbar(props) {
    const navigate = useNavigate()
  const [showNotifyMe, setShowNotifyMe] = useState(false)

    return (
        <>
        {showNotifyMe && <div style={{
        zIndex: 1, position: "fixed", top: 0, width: "100vw", height:"100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "rgba(0,0,0,0.5)"
      }}>
        <SignUp setShowSignUp={setShowNotifyMe} />
      </div>}
        <nav className="navbar navbar-expand-lg fixed-top">
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
                        {/* <li className="nav-item"><Link className="link nav-link" to="#">Products</Link></li> */}
                        <li className="nav-item"><Link className='link nav-link' to="/about-us">About us</Link></li>
                        <li className="nav-item"><Link onClick={() => setShowNotifyMe(true)} className="link nav-link" type="submit">Partner with us</Link></li>
                    </ul>
                </div>
              </div>
            </div>
        </nav>
        </>
    )
}
