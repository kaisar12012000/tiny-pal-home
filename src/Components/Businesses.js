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
                    <p className="h1 diff-font" style={{fontWeight: 700}}>
                        For businesses
                    </p>
                </center>
                <center>
                    <p className="h3" style={{fontWeight: 700}}>
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
                                High Reach and Conversions with Relevant Audience
                                <p>
                                Hyperlocal, age-specific, and interest-based targeting ensures your ads reach engaged parents likely to convert, surpassing the broad reach of Facebook and Instagram.
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
                                Direct Lead Delivery via WhatsApp
                                <p>
                                Enjoy ease of use with direct lead delivery to your WhatsApp, enabling immediate and personal engagement with interested parents
                                </p>
                            </span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className="card">
                        <span style={{backgroundColor: "#EED7FF"}} className="icon-container">
                            {/* <img src="../assets/images/Icon.svg" alt="icon"> */}
                            <Icon />
                        </span>
                        <span style={{color: "#6F0DB5"}} className="card-head">
                            Detailed Performance Tracking
                            <p>
                            Access comprehensive stats to monitor your ad's effectiveness and optimize your campaigns for better results.
                            </p>
                        </span>
                    </div>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%"}}>
                    
                </div>
            </div>
        </div> 
        <Footer /> 
    </>
    )
}
