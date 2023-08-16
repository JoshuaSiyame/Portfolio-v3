// import modules/packages
import React from "react";
import "./Projects.css";

// import icons
import { FaGithub } from "react-icons/fa";
import { MdPreview } from "react-icons/md";

// import image
import Pv3 from "./portfolioV3.png";

// projects components
const Projects = () =>{
    return (
        <div id="projects">
            <div id="projects-container" className="e-container">
                <div id="projects-contents">
                    <h1 className="section-header section-header-position">Projects</h1>
                    <div id="projects-cards-container">
                        <div className="project-card">
                            <img src={Pv3} alt="" className="project-img" />
                            <p className="normal-text"><strong>Portfolio</strong></p>
                            <ol id="card-list">
                                <li className="card-list-item">
                                    <a href="https://github.com/JoshuaSiyame/Portfolio-v3" className="card-list-item-link">
                                        <FaGithub size={25} color="#e5e5e5" />
                                    </a>
                                </li>
                                <li className="card-list-item">
                                    <a href="" className="card-list-item-link">
                                        <MdPreview size={25} color="#e5e5e5" />
                                    </a>
                                </li>
                            </ol>
                        </div>
                        <div className="project-card">
                            <img src={Pv3} alt="" className="project-img" />
                            <p className="normal-text"><strong>E - Commerce</strong></p>
                            <ol id="card-list">
                                <li className="card-list-item">
                                    <a href="" className="card-list-item-link">
                                        <FaGithub size={25} color="#e5e5e5" />
                                    </a>
                                </li>
                                <li className="card-list-item">
                                    <a href="" className="card-list-item-link">
                                        <MdPreview size={25} color="#e5e5e5" />
                                    </a>
                                </li>
                            </ol>
                        </div>
                        <div className="project-card">
                            <img src={Pv3} alt="" className="project-img" />
                            <p className="normal-text"><strong>Real Time Video chat</strong></p>
                            <ol id="card-list">
                                <li className="card-list-item">
                                    <a href="" className="card-list-item-link">
                                        <FaGithub size={25} color="#e5e5e5" />
                                    </a>
                                </li>
                                <li className="card-list-item">
                                    <a href="" className="card-list-item-link">
                                        <MdPreview size={25} color="#e5e5e5" />
                                    </a>
                                </li>
                            </ol>
                        </div>
                        <div className="project-card">
                            <img src={Pv3} alt="" className="project-img" />
                            <p className="normal-text"><strong>Social media app</strong></p>
                            <ol id="card-list">
                                <li className="card-list-item">
                                    <a href="" className="card-list-item-link">
                                        <FaGithub size={25} color="#e5e5e5" />
                                    </a>
                                </li>
                                <li className="card-list-item">
                                    <a href="" className="card-list-item-link">
                                        <MdPreview size={25} color="#e5e5e5" />
                                    </a>
                                </li>
                            </ol>
                        </div>
                        <div className="project-card">
                            <img src={Pv3} alt="" className="project-img" />
                            <p className="normal-text"><strong>Blog</strong></p>
                            <ol id="card-list">
                                <li className="card-list-item">
                                    <a href="" className="card-list-item-link">
                                        <FaGithub size={25} color="#e5e5e5" />
                                    </a>
                                </li>
                                <li className="card-list-item">
                                    <a href="" className="card-list-item-link">
                                        <MdPreview size={25} color="#e5e5e5" />
                                    </a>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;