import React, { useEffect } from 'react'
import Navbar from './Navbar'
import {ReactComponent as PaintingGirl}  from "../assets/images/panting-girl.svg"
import Footer from './Footer'

export default function AboutUs() {
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
                        <p>AI-led child development discovery based on information provided by the parent about the key priorities and challenges concerning the child (part of child's profile), and intelligence gathered bases reading preferences of the parent, </p>
                    </div>
                    <div className="col right">
                        <div className="img">
                            <PaintingGirl />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
