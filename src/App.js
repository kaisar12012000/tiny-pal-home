import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {ReactComponent as Phone} from "./assets/images/phone.svg";
import {ReactComponent as Icon}  from "./assets/images/Icon.svg";
import {ReactComponent as HalfPhone} from "./assets/images/phone-half.svg";
import { useNavigate } from 'react-router-dom';
import Footer from './Components/Footer';
import { useState } from 'react';
import {ReactComponent as Couple} from "./assets/images/couple.svg";
import {ReactComponent as ForParents1} from "./assets/images/for-parents-1.svg"
import {ReactComponent as ForParents2} from "./assets/images/for-parents-2.svg"

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

export function SignUp (props) {

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
                        <b><span className='text-gradient'>Daily new resources</span> <br /><span className='text-gradient'>and experiences for</span><br /> <span className='text-gradient'>3-12 year olds,</span><br /> fostering well-rounded excellence </b>
                    </p>
                    <p style={{fontSize: "1.2rem", fontWeight: 500}}>
                        Available soon.
                    </p>
                    {/* <div style={{ width: "100%", marginBlock: "10px"}} className="row">
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
                    </div> */}
                    <button onClick={() => setShowNotifyMe(true)} className='black-btn' style={{ marginBlock: 20, width: "50%" }}>Get notified</button>
                </div>
                <div className="col container hero-col">
                    <div className="container" id="#phone">
                        {/* <img src="./assets/images/phone.svg" alt="hero-phone" /> */}
                        <Phone />
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="for-parents container">
        <div className='row'>
          <div className='col-3' id='couple'>
            <Couple />
          </div>
          <div className='col-9'>
            <span style={{ color: '#635BFF', fontSize: "1rem", fontWeight: 500 }}>For parents</span>
            <p className='h2' style={{ marginBlock: 30 }}>
              <b>
              With Tiny Pal, parents of 3-12 year olds <span  className='text-gradient'>effortlessly discover</span> local treasures and holistic experiences for their children
              </b>
            </p>
            <p style={{ marginBlock: 10 }}>
              <button onClick={() => setShowNotifyMe(true)} className="btn-outlined">
                  Find Experiences
              </button>
              <button onClick={() => setShowSignUp(true)} className="btn-outlined">
                  Host Experiences
              </button>
            </p>
          </div>
        </div>
    </div>
    <div className="container flowchart" style={{ marginBottom: 20, height : "50vh" }}>
        <div className='row'>
          <div className='col'>
            <ForParents1 />
          </div>
          <div className='col'>
            <ForParents2 />
          </div>
        </div>
    </div>
    <div className="conatiner help">
        <p className="h3 diff-font">
            What can Tiny Pal help you with?
        </p>
        <div className="row">
            <div className="col">
                <div className="card" id="help-card-1">
                    <span className="card-head">
                        Ignite 10x growth horizons. 5x memorable moments.
                        <p>
                          Daily <em style={{ color: "#08164C", fontStyle: "normal" }}>personalized under-1-minute reads</em> to instill over 100 essential skills in your child, with actionable tips and engaging activities for memorable learning moments.
                        </p>
                    </span>
                </div>
            </div>
            <div className="col">
                <div className="card" id="help-card-2">
                    <span className="card-head">
                        Gain 10x toys and books. 5x new friends. Infinite experiences. At no cost!
                        <p>
                        Endless <em style={{ color: "#08164c", fontStyle: "normal"}}>neighborhood swaps of toys and books</em> foster new friendships and enrich your child’s experiences, igniting social intelligence, emotional growth through challenging swaps, and sharpening decision-making skills with each choice.
                        </p>
                    </span>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <div className="card" id="help-card-3">
                    <span className="card-head">
                        Buy and sell pre-loved outdoor children equipment and educational electronics
                        <p>
                        Discover <em style={{ color: "#08164c", fontStyle: "normal"}}>pre-loved, high-end gear from neighborhood treasures</em> for kids rapidly outgrow their equipment.
                        </p>
                    </span>
                </div>
            </div>
            <div className="col">
                <div className="card" id="help-card-4">
                    <span className="card-head">
                        Participate in 10x+ outdoor and indoor activities.
                        <p>
                        <em style={{ color: "#08164c", fontStyle: "normal"}}>Creative engagements</em> – imagine musical chairs, relay races, cognitive boot camps, cake baking sessions etc. – <em style={{ color: "#08164c", fontStyle: "normal"}}>in a small group led by passionate hosts!</em>
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
                    <p style={{ fontWeight: 500, fontSize: "1.2rem" }}>
                        Launching on
                        <p className="h2">November, 21</p>
                    </p>
                    <p>
                    <button onClick={() => setShowNotifyMe(true)} className="black-btn" style={{width: "8vw"}}>
                        Notify me
                    </button>
                    </p>
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
