import React from 'react'
import {ReactComponent as LogoSVG} from "../assets/images/logo.svg";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='row'>
            <div className='col'></div>
                <div className='col'>
                    <LogoSVG />
                    <p style={{ marginBlock: 10 }}>
                    AI-led child development discovery based
                    </p>
                </div>
                <div className='col'>
                    <ul>
                        <li className='nav-item'><b>About</b></li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/about-us">About us</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/">FAQ</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/">Contact us</Link>
                        </li>
                    </ul>
                </div>
                <div className='col'>
                    <ul>
                        <li className='nav-item'><b>Work with us</b></li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/about-us">Advertisers</Link>
                            <Link className='nav-link' to="/about-us">Investors</Link>
                            <Link className='nav-link' to="/about-us">Careers</Link>
                        </li>
                    </ul>
                </div>
                <div className='col'>
                    <div className='social'>
                        <a className='social-link' href='#'>
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a className='social-link' href='#'>
                            <i class="bi bi-twitter-x"></i>
                        </a>
                        <a className='social-link' href='#'>
                            <i class="bi bi-instagram"></i>
                        </a>
                        <a className='social-link' href='#'>
                            <i class="bi bi-linkedin"></i>
                        </a>
                    </div>
                    <p>&copy; 2024 TinyPal.</p>
                    <Link className='nav-link'>
                    Terms & Conditions Privacy Policy
                    </Link>
                </div>
                <div className='col'></div>
            </div>
        </div>
    )
}
