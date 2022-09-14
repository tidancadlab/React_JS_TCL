import React from "react";
import '../CSS/nav.css'
import Logo from '../../../src/icon/logo.svg'
import Github from '../../../src/icon/github.svg'
import Facebook from '../../../src/icon/facebook.svg'
import Instagram from '../../../src/icon/instagram.svg'
import Linkedin from '../../../src/icon/linkedin.svg'
import Twitter from '../../../src/icon/twitter.svg'
import Whatsapp from '../../../src/icon/whatsapp.svg'
import Youtube from '../../../src/icon/youtube.svg'
import { Link } from "react-router-dom";



class Navbar extends React.Component {
    

    render() {
        return (
            <>
                <nav className="nav">
                    <div className="navBar">
                        <div className="logo">
                            <Link to='/'><img src={Logo} alt="Logo" className="logoImg" /></Link>
                        </div>
                        
                        <div className="search">
                            <div className="searchPanel">
                                <input type="text" className="searchInput" placeholder="Search for Expenses" />
                                <div className="searchIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="socialMedia">
                            <h6 className="social-head">Follow us on</h6>
                            <a href="tidancadlab.xyz">
                                <img src={Github} alt="" />
                            </a>
                            <a href="#">
                                <img src={Facebook} alt="" />
                            </a>
                            <a href="#">
                                <img src={Instagram} alt="" />
                            </a>
                            <a href="#">
                                <img src={Linkedin} alt="" />
                            </a>
                            <a href="#">
                                <img src={Twitter} alt="" />
                            </a>
                            <a href="#">
                                <img src={Whatsapp} alt="" />
                            </a>
                            <a href="youtube.com">
                                <img src={Youtube} alt="" />
                            </a>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}
export default Navbar;