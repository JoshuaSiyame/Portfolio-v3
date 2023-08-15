// import modules/packages
import React, { useState } from "react";
import "./TopNav.css";

// import icons
import { FaBars, FaTimes } from "react-icons/fa";

// top navigation component
const TopNav = () => {

    // states to handle toggle
    const [toggle, setToggle] = useState(false);

    // function to handle toggle
    const handleToggle = () =>{
        setToggle(!toggle);
    };

    // function to handle un-toggle
    const handleUnToggle = () =>{
        setToggle(false);
    };

    return (
        <div id="top-nav">
            <div id="top-nav-container" className="e-container">
                <div id="top-nav-contents">
                    <a href="/" id="logo">Josh</a>
                    <ol id={toggle? "main-nav-active": "main-nav"}>
                        <li className="nav-item">
                            <a href="/" className="nav-item-link" onClick={handleUnToggle}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#profile" className="nav-item-link" onClick={handleUnToggle}>Profile</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about-me" className="nav-item-link" onClick={handleUnToggle}>About Me</a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" className="nav-item-link" onClick={handleUnToggle}>Skills</a>
                        </li>
                        <li className="nav-item">
                            <a href="#what-i-do" className="nav-item-link" onClick={handleUnToggle}>What I Do</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-item-link" onClick={handleUnToggle}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact-me" className="nav-item-link" onClick={handleUnToggle}>Contact Me</a>
                        </li>
                    </ol>
                    {toggle? <FaTimes size={25} color="#2a2a2a" onClick={handleUnToggle} />: <FaBars size={25} color="#2a2a2a" onClick={handleToggle}/>}
                </div>
            </div>
        </div>
    );
};

export default TopNav;