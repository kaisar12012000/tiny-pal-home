import React, { useEffect } from 'react'
import {ReactComponent as Icon} from "../assets/images/Icon.svg"
import Navbar from './Navbar'
import Footer from './Footer'

export default function Businesses() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <>
        <Navbar />
        <div>
            <div className="mid businesses">
                <center>
                    <p className="h3 diff-font">
                        For businesses
                    </p>
                </center>
                <center>
                    <p className="h3">
                        Partner with TinyPal to 2-3x your revenue and increase your brand visibility
                    </p>
                </center>
                <center>
                    <button className="grey-btn">
                        Know more
                    </button>
                </center>
            </div>
            <div style={{backgroundColor: "#DAB9F2"}} className="help">
                <p className="h3 diff-font">
                    What can TinyPal help you with?
                </p>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <span style={{backgroundColor: "#EED7FF"}} className="icon-container">
                                {/* <img src="../assets/images/Icon.svg" alt="icon"> */}
                                <Icon />
                            </span>
                            <span style={{color: "#6F0DB5"}} className="card-head">
                                Reach up to 80% more local parents seeking activities
                                <p>
                                    Boost your visibility among local parents actively looking for children’s activities, ensuring your offerings stand out
                                </p>
                            </span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <span style={{backgroundColor: "#EED7FF"}} className="icon-container">
                                {/* <img src="../assets/images/Icon.svg" alt="icon"> */}
                                <Icon />
                            </span>
                            <span style={{color: "#6F0DB5"}} className="card-head">
                                Increase marketing effectiveness by 50% with flexible plans
                                <p>
                                    Customize your marketing strategy with our platform’s versatile tools to effectively showcase and promote your services through targeted advertising and premium listings.
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%"}}>
                    <div style={{width: "50% !important"}} className="card">
                        <span style={{backgroundColor: "#EED7FF"}} className="icon-container">
                            {/* <img src="../assets/images/Icon.svg" alt="icon"> */}
                            <Icon />
                        </span>
                        <span style={{color: "#6F0DB5"}} className="card-head">
                            Boost Lead Conversion Rates by 45% with AI- Agent Qualified Leads
                            <p>
                                Opportunity to project your unique selling points to facilitate personalized AI agent- enabled matching with parents, ensuring that leads are genuinely qualified
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </div> 
        <Footer /> 
    </>
    )
}
