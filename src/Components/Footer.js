import React, { useState } from 'react'
import {ReactComponent as LogoSVG} from "../assets/images/logo.svg";
import { Link } from 'react-router-dom';
import { SignUp } from '../App'

function ContactUs (props) {
    const cities = [
        "Mumbai",
        "Delhi",
        "Bangalore",
        "Hyderabad",
        "Ahmedabad",
        "Chennai",
        "Kolkata",
        "Surat",
        "Pune",
        "Jaipur",
        "Lucknow",
        "Kanpur",
        "Nagpur",
        "Indore",
        "Thane",
        "Bhopal",
        "Visakhapatnam",
        "Pimpri",
        "Patna",
        "Vadodara",
        "Ghaziabad",
        "Ludhiana",
        "Agra",
        "Nashik",
        "Faridabad",
        "Meerut",
        "Rajkot",
        "Kalyan",
        "Vasai",
        "Varanasi",
        "Srinagar",
        "Aurangabad",
        "Dhanbad",
        "Amritsar",
        "Navi",
        "Prayagraj",
        "Howrah",
        "Ranchi",
        "Jabalpur",
        "Gwalior",
        "Coimbatore",
        "Vijayawada",
        "Jodhpur",
        "Madurai",
        "Raipur",
        "Kota",
      ]
    return (
        <div className='card modal-card' style={{ display: "block", height: "fit-content", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
          <div style={{
            width: "100%", display:"flex", justifyContent: "flex-end", marginBlock: 10
          }}>
            <i style={{cursor: "pointer"}} onClick={() => props.setShowContactUs(false)} class="bi bi-x-lg"></i>
          </div>
          <p className='h1 diff-font'>
          Contact us.
          </p>
          <div className='row'>
            <div className='col'>
              <label>Name</label>
              <input className='input' type='text' placeholder='Your name' />
            </div>
            <div className='col'>
              <label>Phone Number</label>
              <input className='input' type='number' placeholder='Phone number' />
            </div>
            <div className='col'>
              <label>City</label>
              <select className='input'>
                <option>Select City</option>
                {cities.map(c => (
                  <option value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
          <textarea className='input' placeholder='Share your thoughts and our team will get back to you'></textarea>
          {/* <small>
          ** We will not send you any promotions :)
          </small> */}
          <center>
            <button>Submit</button>
          </center>
        </div>
    )
}

export default function Footer(props) {

    const [showContactUs, setShowContactUs] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)

    return (
        <>
        {showContactUs && <div style={{
              zIndex: 1, position: "fixed", top: 0, width: "100vw", height:"100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "rgba(0,0,0,0.5)"
            }}>
              <ContactUs setShowContactUs={setShowContactUs} />
            </div>}
        {showSignUp && <div style={{
          zIndex: 1, position: "fixed", top: 0, width: "100vw", height:"100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "rgba(0,0,0,0.5)"
        }}>
          <SignUp setShowSignUp={setShowSignUp} />
        </div>}
        <div className='footer'>
            <div className='row'>
            <div className='col'></div>
                <div className='col'>
                    <ul>
                    <li className="navbar-brand nav-item">
                    <Link className='nav-link' to="/">
                        <LogoSVG />
                    </Link>
                    </li>
                    <li className="navbar-brand nav-item">
                    <p style={{ marginBlock: 10 }}>
                    An experiential learning marketplace. 
                    </p>
                    </li>
                    </ul>
                </div>
                <div className='col'>
                    <ul>
                        <li className='nav-item'><b>About</b></li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/about-us">About us</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' onClick={() => setShowContactUs(true)}>Contact us</Link>
                        </li>
                    </ul>
                </div>
                <div className='col'>
                    <ul>
                        <li className='nav-item'><b>Work with us</b></li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/business">Advertisers</Link>
                        </li>
                        <li className='nav-item'><Link className='nav-link' onClick={() => setShowSignUp(true)}>Hosts</Link></li>
                        {/* <li className='nav-item'><Link className='nav-link' to="/careers">Careers</Link></li> */}
                    </ul>
                </div>
                <div className='col'>
                    <ul>
                    <li className='social nav-item'>
                        <a className='social-link' href='https://www.facebook.com/profile.php?id=61561060388969' target='_blank'>
                            <i class="bi bi-facebook"></i>
                        </a>
                        {/* <a className='social-link' href='#'>
                            <i class="bi bi-twitter-x"></i>
                        </a> */}
                        <a className='social-link' href='https://www.instagram.com/tinypalinc?igsh=MWd1ZzAxZHdxejA2bw=='>
                            <i class="bi bi-instagram"></i>
                        </a>
                        <a className='social-link' href='https://www.linkedin.com/company/tinypal/' target='_blank'>
                            <i class="bi bi-linkedin"></i>
                        </a>
                    </li>
                    <li className='nav-item'></li>
                    <li className='nav-item'>
                    <p>&copy; 2024 TinyPal.</p>
                    </li>
                    <li className='nav-item'>
                    {/* <Link className='nav-link'>
                    Terms & Conditions Privacy Policy
                    </Link> */}
                    </li>
                    </ul>
                </div>
                <div className='col'></div>
            </div>
        </div> 
        </>
    )
}
