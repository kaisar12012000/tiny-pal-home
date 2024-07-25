import './App.css';
import Navbar from './Components/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from './Components/Footer';
import { useEffect, useRef, useState } from 'react';
import {ReactComponent as ForParents1} from "./assets/images/for-parents-1.svg"
import {ReactComponent as ForParents2} from "./assets/images/for-parents-2.svg"
import CouplePNG from "./assets/images/couple.png";
import HalfPhone from "./assets/images/phone-half.png"
import {ReactComponent as Phone1} from "./assets/images/phone-1.svg"
import {ReactComponent as Phone4} from "./assets/images/phone-4.svg"
// import Phone6 from "./assets/images/phone-6.psvg
import {ReactComponent as Phone5} from "./assets/images/phone-5.svg"
import {ReactComponent as Phone2} from "./assets/images/phone-2.svg"
import {ReactComponent as Phone3} from "./assets/images/phone-3.svg"
import {ReactComponent as PostHeaderImg1} from "./assets/images/post-hero-img-1.svg"
import {ReactComponent as PostHeaderImg2} from "./assets/images/post-hero-img-2.svg"
import {ReactComponent as PostHeaderImg3} from "./assets/images/post-hero-img-3.svg"
import {ReactComponent as PostHeaderImg4} from "./assets/images/post-hero-img-4.svg"
import {ReactComponent as PostHeaderImg5} from "./assets/images/post-hero-img-5.svg"
import emailjs from "emailjs-com"

export function NotifyMe (props) {

  const [sent, setSent] = useState(false)
  const [msg, setMsg] = useState("")
  const [name, setName] = useState("")
  const [phNum, setPhNum] = useState("")
  const [city, setCity] = useState("")
  const [err, setErr] = useState()

  const formRef = useRef()

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

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formRef.current)
     emailjs.sendForm("service_ik0cxgj", "template_5k3txpz", formRef.current, "u0Pzu3nGFYuptPdWW").then(() => {
      setSent(true)
      console.log("SUCCESS!")
     }, error => {
      console.log("Failed!", error)
      setErr(err)
     })
  }

  return (
      <div className='card modal-card' style={{ display: "block", height: "fit-content", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        <div style={{
          width: "100%", display:"flex", justifyContent: "flex-end", marginBlock: 10
        }}>
          <i style={{cursor: "pointer"}} onClick={() => props.setShowNotifyMe(false)} class="bi bi-x-lg"></i>
        </div>
        {sent ? <>
        <center>
          <div className='success'>
            <p className='h3 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3 p-3'>
              Thank you for reaching out to us. Our team will get in touch with you shortly.
            </p>
          </div>
        </center>
        </> : err ? <>
        <center>
          <div className='success'>
            <p className='h3 text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3 p-3'>
              Something went wrong. Please reach out to us at preeti.harshavardhan@gmail.com
            </p>
          </div>
        </center>
        </> : <><p className='h1 diff-font'>
        As a Parent what are you looking for?
        </p>
        <form ref={formRef} onSubmit={submitHandler}>
        <textarea name='msg' value={msg} onChange={(e) => setMsg(e.target.value)} className='input' placeholder='Specific event/service'></textarea>
        <div className='row'>
          <div className='col'>
            <label>Name</label>
            <input name='name' value={name} onChange={(e) => setName(e.target.value)} className='input' type='text' placeholder='Your name' />
          </div>
          <div className='col'>
            <label>Phone Number</label>
            <input name='phNum' value={phNum} onChange={(e) => setPhNum(e.target.value)} className='input' type='text' placeholder='Phone number' />
          </div>
          <div className='col'>
            <label>City</label>
            <select name='city' onChange={e => setCity(e.target.value)} className='input'>
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
        <input type='hidden' name='type' value="Parent" />
        <center>
          <input className='submit-btn' type='submit' value="Submit" />
        </center>
        </form> </>}
      </div>
  )
}

export function SignUp (props) {

  const [sent, setSent] = useState(false)
  const [err, setErr] = useState()

  const formRef = useRef()

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

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formRef.current)
     emailjs.sendForm("service_ik0cxgj", "template_5k3txpz", formRef.current, "u0Pzu3nGFYuptPdWW").then(() => {
      setSent(true)
      console.log("SUCCESS!")
     }, error => {
      console.log("Failed!", error)
      setErr(err)
     })
  }

  return (
      <div className='card modal-card' style={{ display: "block", height: "fit-content", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        <div style={{
          width: "100%", display:"flex", justifyContent: "flex-end", marginBlock: 10
        }}>
          <i style={{cursor: "pointer"}} onClick={() => props.setShowSignUp(false)} class="bi bi-x-lg"></i>
        </div>
        {sent ? <>
        <center>
          <div className='success'>
            <p className='h3 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3 p-3'>
              Thank you for reaching out to us. Our team will get in touch with you shortly.
            </p>
          </div>
        </center>
        </> : err ? <>
        <center>
          <div className='success'>
            <p className='h3 text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3 p-3'>
              Something went wrong. Please reach out to us at preeti.harshavardhan@gmail.com
            </p>
          </div>
        </center>
        </> : <><p className='h1 diff-font'>
        Sign up if you are interested to offer events/services: 
        </p>
        <form ref={formRef} onSubmit={submitHandler}>
        <div className='row'>
          <div className='col'>
            <label>Name</label>
            <input name='name' className='input' type='text' placeholder='Your name' />
          </div>
          <div className='col'>
            <label>Phone Number</label>
            <input name='phNum' className='input' type='text' placeholder='Phone number' />
          </div>
          <div className='col'>
            <label>City</label>
            <select name='city' className='input'>
              <option>Select City</option>
              {cities.map(c => (
                <option value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>
        <textarea name='msg' className='input' placeholder='What would you like to offer/host?'></textarea>
        <small>
        ** We will not send you any promotions :)
        </small>
        <input name='type' value="Advertiser" type='hidden' />
        <center>
          <input className='submit-btn' type='submit' value="Submit" />
        </center>
        </form></>}
      </div>
  )
}


function App() {
  const [showNotifyMe, setShowNotifyMe] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  // const navigate = useNavigate()

  const getWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", getWidth)
    return () => {
      window.removeEventListener("resize", getWidth)
    }
  }, [windowWidth])

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
        <div className="container" style={{ marginTop: "60px" }}>
            <div className="row">
                <div className="col container hero-col">
                    <p className="h1 diff-font">
                        <b><span className='text-gradient'>Daily new resources</span> <br /><span className='text-gradient'>and experiences for</span><br /> <span className='text-gradient'>1-12 year olds,</span><br /> fostering well-rounded excellence </b>
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
                        <div style={{ width: "-webkit-fill-available" }} id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="5000">
                              {/* <img src={Phone1} class="" alt="..." /> */}
                              <Phone1 className='d-block w-100' />
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                              {/* <img src={Phone2} class="" alt="..." /> */}
                              <Phone2 className='d-block w-100' />
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                              {/* <img src={Phone3} class="" alt="..." /> */}
                              <Phone3 className='d-block w-100' />
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                              {/* <img src={Phone4} class="" alt="..." /> */}
                              <Phone4 className='d-block w-100' />
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                              {/* <img src={Phone5} class="" alt="..." /> */}
                              <Phone5 className='d-block w-100' />
                            </div>
                          </div>
                          <div className='carousel-nav'>
                            <button style={{ color: "#000" }} type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                              <span style={{ borderRadius: "50%", border: "1.5px solid #000", padding: "5px 10px", backgroundColor: "#fff" }}><i style={{ color: "#000 !important" }} class="bi bi-chevron-left"></i></span>
                            </button>
                            <button style={{ color: "#000" }} type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                              <span style={{ borderRadius: "50%", border: "1.5px solid #000", padding: "5px 10px", backgroundColor: "#fff" }}><i style={{ color: "#000 !important" }} class="bi bi-chevron-right"></i></span>
                            </button>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className='post-header container'>
        <div className='row'>
          <div className='col'>
            <div className='card' style={{ border: "1px solid #F2EAD9", height: "30vh" }}>
              <center>
                <PostHeaderImg1 style={{ height: "15vh" }} />
              </center>
              <center>
                <p className='h6' style={{ fontWeight: 700 }}>Explore fun family activities</p>
              </center>
            </div>
          </div>
          <div className='col'>
            <div className='card' style={{ border: "1px solid #F2EAD9", height: "30vh" }}>
              <center>
                <PostHeaderImg2 style={{ height: "15vh" }} />
              </center>
              <center>
                <p className='h6' style={{ fontWeight: 700 }}>Engage in group events</p>
              </center>
            </div>
          </div>
          <div className='col'>
            <div className='card' style={{ border: "1px solid #F2EAD9", height: "30vh" }}>
              <center>
                <PostHeaderImg3 style={{ height: "15vh" }} />
              </center>
              <center>
                <p className='h6' style={{ fontWeight: 700 }}>Swap books and educational toys</p>
              </center>
            </div>
          </div>
          <div className='col'>
            <div className='card' style={{ border: "1px solid #F2EAD9", height: "30vh" }}>
              <center>
                <PostHeaderImg4 style={{ height: "15vh" }} />
              </center>
              <center>
                <p className='h6' style={{ fontWeight: 700 }}>Buy and sell pre-loved items </p>
              </center>
            </div>
          </div>
          <div className='col'>
            <div className='card' style={{ border: "1px solid #F2EAD9", height: "30vh" }}>
              <center>
                <PostHeaderImg5 style={{ height: "15vh" }} />
              </center>
              <center>
                <p className='h6' style={{ fontWeight: 700 }}>Foster growth daily</p>
              </center>
            </div>
          </div>
        </div>
      </div>
      <div className="for-parents container">
        <div className='row'>
          <div className='col-3' id='couple'>
            {/* <Couple /> */}
            <img src={CouplePNG} alt='couple' style={{ height: "100% !important", width: "auto" }} />
          </div>
          <div className='col-9'>
            <p className='h2' style={{ marginBlock: 30 }}>
              <b>
              With Tiny Pal, parents of 1-12 year olds <span  className='text-gradient'>effortlessly discover</span> local treasures and holistic experiences for their children
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
    <div className="container flowchart" style={{ marginBottom: 20, height : "fit-content" }}>
        <center>
          <p className='h1 diff-font text-gradient' style={{ fontWeight: 700, marginBottom: 60 }}>
            AI helps you discover superior experiences faster
          </p>
        </center>
        <center>
          <p className='h3' style={{ fontWeight: 700, marginBlock: 30 }}>
          TinyPal transforms parenting from navigating known challenges to effortlessly discovering fresh, new paths for children
          </p>
        </center>
        <div className='row'>
          <div className='col'>
            <ForParents1 />
          </div>
          <div className='col'>
            <ForParents2 />
          </div>
        </div>
    </div>
    <div className="help">
      <div className='container'>
        <p className="h3 diff-font">
            What can Tiny Pal help you with?
        </p>
        {windowWidth >= 1200 ? <>
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className='row'>
                  <div className="col">
                      <div style={{ padding: 0, margin: 0, height: "fit-content", borderRadius: 20, backgroundImage: "radial-gradient(106.91% 120.05% at 117.04% -8.82%, #FFECF4 0%, #FFFFFF 50.67%)" }}>
                        <div className="card" id="help-card-1">
                            <span className="card-head">
                                Ignite 10x growth horizons. 5x memorable moments.
                                <p>
                                  Daily <em style={{ color: "#08164C", fontStyle: "normal" }}>personalized under-1-minute reads</em> to instill over 100 essential skills in your child, with actionable tips and engaging activities for memorable learning moments.
                                </p>
                            </span>
                        </div>
                      </div>
                  </div>
                  <div className="col">
                    <div style={{ padding: 0, margin: 0, height: "fit-content", borderRadius: 20, backgroundImage: "radial-gradient(106.91% 120.05% at 117.04% -8.82%, #FFECF4 0%, #FFFFFF 50.67%)" }}>
                      <div className="card" id="help-card-2">
                          <span className="card-head">
                              Gain 10x educational toys and books. 5x new friends. At no cost!
                              <p>
                              Endless <em style={{ color: "#08164c", fontStyle: "normal"}}>neighborhood swaps of toys and books</em> foster new friendships and enrich your child’s experiences, igniting social intelligence, emotional growth through challenging swaps, and sharpening decision-making skills with each choice.
                              </p>
                          </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='row'>
                  <div className="col">
                    <div style={{ padding: 0, margin: 0, height: "fit-content", borderRadius: 20, backgroundImage: "radial-gradient(106.91% 120.05% at 117.04% -8.82%, #FFECF4 0%, #FFFFFF 50.67%)" }}>
                      <div className="card" id="help-card-3">
                          <span className="card-head">
                              Buy and sell pre-loved outdoor children equipment and educational electronics
                              <p>
                              Discover <em style={{ color: "#08164c", fontStyle: "normal"}}>pre-loved, high-end gear from neighborhood treasures</em> for kids rapidly outgrow their equipment.
                              </p>
                          </span>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div style={{ padding: 0, margin: 0, height: "fit-content", borderRadius: 20, backgroundImage: "radial-gradient(106.91% 120.05% at 117.04% -8.82%, #FFECF4 0%, #FFFFFF 50.67%)" }}>
                      <div className="card" id="help-card-4">
                          <span className="card-head">
                              Participate in 10x+ outdoor and indoor activities
                              <p>
                              <em style={{ color: "#08164c", fontStyle: "normal"}}>Creative engagements</em> – imagine musical chairs, relay races, cognitive boot camps, cake baking sessions etc. – <em style={{ color: "#08164c", fontStyle: "normal"}}>in a small group led by passionate hosts!</em>
                              </p>
                          </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button style={{ marginLeft: "-8%", color: "#000" }} class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
              <span style={{ borderRadius: "50%", border: "1.5px solid #000", padding: "5px 10px", backgroundColor: "#fff" }}><i style={{ color: "#000 !important" }} class="bi bi-chevron-left"></i></span>
            </button>
            <button style={{ marginRight: "-8%", color: "#000" }} class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
              <span style={{ borderRadius: "50%", border: "1.5px solid #000", padding: "5px 10px", backgroundColor: "#fff" }}><i style={{ color: "#000 !important"}} class="bi bi-chevron-right"></i></span>
            </button>
          </div>
        </> : <>
          <div className="col">
              <div style={{ padding: 0, margin: 0, height: "fit-content", borderRadius: 20, backgroundImage: "radial-gradient(106.91% 120.05% at 117.04% -8.82%, #FFECF4 0%, #FFFFFF 50.67%)" }}>
                <div className="card" id="help-card-1">
                    <span className="card-head">
                        Ignite 10x growth horizons. 5x memorable moments.
                        <p>
                          Daily <em style={{ color: "#08164C", fontStyle: "normal" }}>personalized under-1-minute reads</em> to instill over 100 essential skills in your child, with actionable tips and engaging activities for memorable learning moments.
                        </p>
                    </span>
                </div>
              </div>
          </div>
          <div className="col">
            <div style={{ padding: 0, margin: 0, height: "fit-content", borderRadius: 20, backgroundImage: "radial-gradient(106.91% 120.05% at 117.04% -8.82%, #FFECF4 0%, #FFFFFF 50.67%)" }}>
              <div className="card" id="help-card-2">
                  <span className="card-head">
                      Gain 10x educational toys and books. 5x new friends. At no cost!
                      <p>
                      Endless <em style={{ color: "#08164c", fontStyle: "normal"}}>neighborhood swaps of toys and books</em> foster new friendships and enrich your child’s experiences, igniting social intelligence, emotional growth through challenging swaps, and sharpening decision-making skills with each choice.
                      </p>
                  </span>
              </div>
            </div>
          </div>
          <div className="col">
            <div style={{ padding: 0, margin: 0, height: "fit-content", borderRadius: 20, backgroundImage: "radial-gradient(106.91% 120.05% at 117.04% -8.82%, #FFECF4 0%, #FFFFFF 50.67%)" }}>
              <div className="card" id="help-card-3">
                  <span className="card-head">
                      Buy and sell pre-loved outdoor children equipment and educational electronics
                      <p>
                      Discover <em style={{ color: "#08164c", fontStyle: "normal"}}>pre-loved, high-end gear from neighborhood treasures</em> for kids rapidly outgrow their equipment.
                      </p>
                  </span>
              </div>
            </div>
          </div>
          <div className="col">
            <div style={{ padding: 0, margin: 0, height: "fit-content", borderRadius: 20, backgroundImage: "radial-gradient(106.91% 120.05% at 117.04% -8.82%, #FFECF4 0%, #FFFFFF 50.67%)" }}>
              <div className="card" id="help-card-4">
                  <span className="card-head">
                      Participate in 10x+ outdoor and indoor activities
                      <p>
                      <em style={{ color: "#08164c", fontStyle: "normal"}}>Creative engagements</em> – imagine musical chairs, relay races, cognitive boot camps, cake baking sessions etc. – <em style={{ color: "#08164c", fontStyle: "normal"}}>in a small group led by passionate hosts!</em>
                      </p>
                  </span>
              </div>
            </div>
          </div>
        </>}
      </div>
    </div>
    <div className="notify container">
        <div className="notify-card">
            <div className="row">
                <div className="col top">
                    <p style={{ fontWeight: 500, fontSize: "1.2rem" }}>
                        Launching on
                        <p className="h1 diff-font">November, 21</p>
                    </p>
                    <p>
                    <button onClick={() => setShowNotifyMe(true)} className="black-btn" style={{width: "8vw"}}>
                        Notify me
                    </button>
                    </p>
                </div>
                <div className="col bottom">
                    <div className="img">
                      {/* <HalfPhone /> */}
                      <img src={HalfPhone} alt='phone' className='half-img' />
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
