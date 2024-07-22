import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
// import {ReactComponent as PaintingGirl}  from "../assets/images/panting-girl.svg"
import {ReactComponent as AboutUsImg}  from "../assets/images/About-us-img.svg"
import Footer from './Footer'

export default function AboutUs() {
    // const [showSignUp, setShowSignUp] = useState(false)
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <>
        <Navbar />
        <div className="notify container">
            <div className="notify-card about-us-card">
                <div className="row">
                    <div className="col left">
                        <p className='h3 diff-font'>
                            About Us
                        </p>
                        <p>An experiential marketplace for AI-led child development discovery. We started in 2024 with a vision to become an all-in-one platform for convenient and fulfilling parenting. Our mission is to provide holistic experiences for children with utmost convenience for a parent via suggestions on the feed bases past behavior, child interests and parental priorities.</p>
                    </div>
                    <div className="col right">
                        <div className="img">
                            {/* <PaintingGirl /> */}
                            <AboutUsImg />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
