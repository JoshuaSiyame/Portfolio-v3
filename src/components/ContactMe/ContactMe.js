// import modules/packages
import React from "react";
import { Link } from "react-router-dom";
import "./ContactMe.css";

// import icons
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

// contact me component
const ContactMe = () => {
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
                                </ol>
                            </div>
                            <div id="socials">
                                <h2 className="section-sub-header-1">Social accounts</h2>
                                <ol id="socials-list" style={{ listStyle: "none", display: "flex", columnGap: "1em", padding: "1em 0" }}>
                                    <li>
                                        <a href="https://www.github.com/joshuasiyame">
                                            <FaGithub size={25} color="#e5e5e5" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/joshuasiyame">
                                            <FaTwitter size={25} color="#e5e5e5" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/joshuasiyame">
                                            <FaLinkedin size={25} color="#e5e5e5" />
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div id="contact-me-form">
                            <form id="form">
                                <div className="form-group">
                                    <input type="text" name="first_name" placeholder="Enter your first name." className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="last_name" placeholder="Enter your last name." className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="email" placeholder="Enter a valid email address." className="form-control" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" placeholder="Enter your message here ..." rows={5} />
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