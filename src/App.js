import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {ReactComponent as Phone} from "./assets/images/phone.svg";
import {ReactComponent as Icon}  from "./assets/images/Icon.svg";
import {ReactComponent as HalfPhone} from "./assets/images/phone-half.svg";
import { useNavigate } from 'react-router-dom';
import Footer from './Components/Footer';
import { useState } from 'react';

function NotifyMe (props) {

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
          <i style={{cursor: "pointer"}} onClick={() => props.setShowNotifyMe(false)} class="bi bi-x-lg"></i>
        </div>
        <p className='h1 diff-font'>
        As a Parent what are you looking for?
        </p>
        <textarea className='input' placeholder='Specific event/service'></textarea>
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
        <small>
        ** We will not send you any promotions :)
        </small>
        <center>
          <button>Submit</button>
        </center>
      </div>
  )
}

function SignUp (props) {

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
          <i style={{cursor: "pointer"}} onClick={() => props.setShowSignUp(false)} class="bi bi-x-lg"></i>
        </div>
        <p className='h1 diff-font'>
        Sign up if you are interested to offer events/services: 
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
        <textarea className='input' placeholder='What would you like to offer/host?'></textarea>
        <small>
        ** We will not send you any promotions :)
        </small>
        <center>
          <button>Submit</button>
        </center>
      </div>
  )
}


function App() {
  const [showNotifyMe, setShowNotifyMe] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  const navigate = useNavigate()

  return (
    <div>
      {showNotifyMe && <div style={{
        zIndex: 1, position: "fixed", top: 0, width: "100vw", height:"100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "rgba(0,0,0,0.5)"
      }}>
        <NotifyMe setShowNotifyMe={setShowNotifyMe} />
      </div>}
      {showSignUp && <div style={{
        zIndex: 1, position: "fixed", top: 0, width: "100vw", height:"100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "rgba(0,0,0,0.5)"
      }}>
        <SignUp setShowSignUp={setShowSignUp} />
      </div>}
      <div className='header'>
        <Navbar setShowNotifyMe={setShowNotifyMe} />
        <div className="container">
            <div className="row">
                <div className="col container hero-col">
                    <p className="h1 diff-font">
                        <b>Daily new resources and experiences for 3-12 year olds</b>, fostering well-rounded excellence 
                    </p>
                    <small>
                        Available soon on
                    </small>
                    <div style={{ width: "100%", marginBlock: "10px"}} className="row">
                        <div className="col">
                            <button className="download">
                                <i className="bi-apple"></i>
                                <span>
                                    <small>Download on the</small>
                                    App Store
                                </span>
                            </button>
                        </div>
                        <div className="col">
                            <button className="download">
                                <i className="bi-google-play"></i>
                                <span>
                                    <small>GET IT ON</small>
                                    Google Play
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col container hero-col">
                    <div className="container">
                        {/* <img src="./assets/images/phone.svg" alt="hero-phone" /> */}
                        <Phone />
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="mid container">
        <center>
            <p style={{fontWeight: 700, marginBlock: "20px"}} className="h2">
                With Tiny Pal, parents of 3-12 year olds effortlessly discover local treasures and holistic experiences for their children
            </p>
        </center>
        <center>
            <div className="row">
                <div className="col">
                    <button onClick={() => setShowSignUp(true)} className="btn-outlined">
                        Find Experiences
                    </button>
                    <button onClick={() => navigate("/business")} className="btn-outlined">
                        Host Experiences
                    </button>
                </div>
            </div>
        </center>
    </div>
    <div className="mid container">
        <center>
            <p style={{fontWeight: 700, marginBlock: "20px"}} className="h2">
                With Tiny Pal, parents of 3-12 year olds effortlessly discover local treasures and holistic experiences for their children
            </p>
        </center>
        <center>
            <div className="row">
                <div className="col">
                    <button onClick={() => setShowSignUp(true)} className="btn-outlined">
                        Find Experiences
                    </button>
                    <button  onClick={() => navigate("/business")} className="btn-outlined">
                        Host Experiences
                    </button>
                </div>
            </div>
        </center>
    </div>
    <div className="conatiner help">
        <p className="h3 diff-font">
            What can Tiny Pal help you with?
        </p>
        <div className="row">
            <div className="col">
                <div className="card">
                    <span className="icon-container">
                        {/* <img src="./assets/images/Icon.svg" alt="icon" /> */}
                        <Icon />
                    </span>
                    <span className="card-head">
                        Ignite 10x growth horizons. 5x memorable moments for your child
                        <p>
                            Daily personalized under-1-minute reads to instill over 100 essential skills in your child, with actionable tips and engaging activities for memorable learning moments.
                        </p>
                    </span>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <span className="icon-container">
                        {/* <img src="./assets/images/Icon.svg" alt="icon" /> */}
                        <Icon />
                    </span>
                    <span className="card-head">
                        Gain 10x toys and books. 5x new friends. Infinite experiences. At no cost!
                        <p>
                            Daily personalized under-1-minute reads to instill over 100 essential skills in your child, with actionable tips and engaging activities for memorable learning moments.
                        </p>
                    </span>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <div className="card">
                    <span className="icon-container">
                        {/* <img src="./assets/images/Icon.svg" alt="icon" /> */}
                        <Icon />
                    </span>
                    <span className="card-head">
                        Buy and sell pre-loved outdoor children equipment and educational electronics
                        <p>
                            Daily personalized under-1-minute reads to instill over 100 essential skills in your child, with actionable tips and engaging activities for memorable learning moments.
                        </p>
                    </span>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <span className="icon-container">
                        {/* <img src="./assets/images/Icon.svg" alt="icon" /> */}
                        <Icon />
                    </span>
                    <span className="card-head">
                        Participate in 10x+ diverse events and activities
                        <p>
                            Daily personalized under-1-minute reads to instill over 100 essential skills in your child, with actionable tips and engaging activities for memorable learning moments.
                        </p>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div className="notify container">
        <div className="notify-card">
            <div className="row">
                <div className="col top">
                    <p>
                        Launching on
                    </p>
                    <p className="h2">Novemver, 21</p>
                    <button onClick={() => setShowNotifyMe(true)} className="black-btn">
                        Notify me
                    </button>
                </div>
                <div className="col bottom">
                    <div className="img">
                      <HalfPhone />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </div>
  );
}

export default App;
