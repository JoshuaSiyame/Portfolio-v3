// import modules/packages
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ContactMe.css";

// import icons
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

// contact me component
const ContactMe = () => {
    // controlled components
    const [fistName, setFirstName] = useState ("");
    const [lastName, setLastName] = useState ("");
    const [email, setEmail] = useState ("");
    const [message, setMessage] = useState ("");
    // const [errNotice, setErrNotice] = useState("");

    // prevent default form behavior
    const handleFormSubmit = (e) =>{        
        e.preventDefault();
    };
    
    // functions to handle states 
    const handleFirstName = (e) =>{
        setFirstName(e.target.value);
    };

    const handleLastName = (e) =>{
        setLastName(e.target.value);
    };

    const handleEmail = (e) =>{
        setEmail(e.target.value)
    };

    // use effect to validate the email entered
    // useEffect();

    const handleMessage = (e) =>{
        setMessage(e.target.value);
    };

    return (
        <div id="contact-me">
            <div id="contact-me-container" className="e-container">
                <div id="contact-me-content-container">
                    <p id="contact-me-intro">Ready To Talk ?</p>
                    <div id="contact-me-contents">
                        <div id="contact-me-msg">
                            <h1 className="section-header">Contact Me</h1>
                            <p className="normal-text">
                                If you have any question or doubt about coding or
                                any project you are working on, do not hesitate to
                                contact me. Will try my best to answer you as soon
                                as possible.
                            </p>
                            <div id="contacts">
                                <h2 className="section-sub-header-1">Contacts</h2>
                                <ol id="contacts-list" style={{ listStyle: "none" }}>
                                    <li className="normal-text"><strong>Email:</strong>  josh2023decoded@gmail.com</li>
                                    <li className="normal-text"><strong>Tel:</strong> +255 753 814 82</li>
                                    <li className="normal-text"><strong>Tel:</strong> +255 380 151 69</li>
                                </ol>
                            </div>
                            <div id="socials">
                                <h2 className="section-sub-header-1">Social accounts</h2>
                                <ol id="socials-list" style={{ listStyle: "none", display: "flex", columnGap: "1em", padding: "1em 0" }}>
                                    <li>
                                        <a href="https://www.github.com/joshuasiyame" target="_blank">
                                            <FaGithub size={25} color="#e5e5e5" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/joshuasiyame" target="_blank">
                                            <FaTwitter size={25} color="#e5e5e5" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/joshuasiyame" target="_blank">
                                            <FaLinkedin size={25} color="#e5e5e5" />
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div id="contact-me-form">
                            <form id="contact-form" onSubmit={handleFormSubmit}>
                                <div className="form-group">
                                    <input type="text" name="first_name" placeholder="Enter your first name." className="form-control" onChange={handleFirstName} value={fistName}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="last_name" placeholder="Enter your last name." className="form-control" onChange={handleLastName} value={lastName}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="email" placeholder="Enter a valid email address." className="form-control" onChange={handleEmail} value={email}/>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" placeholder="Enter your message here ..." rows={5} onChange={handleMessage} value={message} />
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Send" className="submit-btn" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;