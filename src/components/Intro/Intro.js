// import modules/packages
import React from "react";
import "./Intro.css";

// import image
import IntroImg from "./introImg.jpg"

// intro component
const Intro = () => {
    return (
        <div id="intro">
            <div id="intro-container" className="e-container">
                <div id="intro-contents">
                    <div id="intro-text-container">
                        <span id="golden-yellow-dot"></span>
                        <h1 id="intro-greeting">Hi, I'm Joshua Siyame</h1>
                        <p className="normal-text intro-text">
                            Full-Stack Developer with a proven track
                            record of delivering innovative software solutions
                        </p>
                        <a href="#contact-me">
                            <button id="primary-btn">Contacts</button>
                        </a>
                    </div>
                    <div id="intro-image-container">
                        <img src={IntroImg} alt="" id="intro-img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;