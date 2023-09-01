// import modules/packages
import React from "react";
import "./AboutMe.css";

// import image
import AboutMeImg from "./aboutMeImg.JPG";

// about me component 
const AboutMe = () => {
    return (
        <div id="about-me">
            <div id="about-me-container" className="e-container">
                <div id="about-me-content">
                    <h1 className="section-header section-header-position">About Me</h1>
                    <div id="about-me-contents-container">
                        <div id="about-me-text">
                            <p className="normal-text">
                                I'm <strong>Joshua P. Siyame</strong>, a full-stack 
                                developer with a passion for both Frontend and Backend
                                development I have a deep understanding of the latest
                                technologies and frameworks in the industry.
                                Throughout my career, I have had the privilege of
                                working with a diverse range of teams and have
                                demonstrated a proven ability to adapt to different
                                environments and collaborate effectively with
                                individuals from different backgrounds.
                            </p>
                            <p className="normal-text">
                                Currently I work as a Freelancer where
                                I oversee everything entailing the frontend and backend
                                development of the clients products. I'm
                                always looking to learn and improve my skills.
                            </p>
                            <p className="normal-text">
                                With a demonstrated track record of delivering frontend
                                solutions, I'm currently actively pursuing new possibilities
                                that will not only allow me to use my knowledge and contribute
                                to cutting-edge projects, but will also create an atmosphere
                                for continual skill growth. I'm motivated by a desire to
                                broaden my skill set and stay on the cutting edge of
                                developing technology. I'm keen to join a team where
                                I can both apply and grow my present talents while
                                producing relevant solutions.
                            </p>
                        </div>
                        <div id="about-me-img-container">
                            <img src={AboutMeImg} alt="" className="about-me-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;