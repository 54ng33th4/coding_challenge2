import React from "react";
import "./navbar.css";
import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import logo from "./../../assets/logo1.png";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_bar");
    }

    return(
        <>
            <header>
                <div className="logo">
                    <img src={logo} alt="logo"></img>
                    <h2>Suraj Kumar Jena</h2>
                </div>
                <nav ref={navRef}>
                    <a href="#home">Home</a>
                    <a href="#home">Skills</a>
                    <a href="#home">Projects</a>
                    <a href="#home">Services</a>
                    <a href="#home">About</a>
                    <a href="#home">Contact</a>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button className="nav-btn nav-open-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            </header>
        </>
    )
}

export default Navbar;