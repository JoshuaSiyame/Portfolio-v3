// import modules/packages
import React from "react";
import "./Projects.css";

// import icons
import { FaGithub } from "react-icons/fa";
import { MdPreview } from "react-icons/md";

// import image
import Pv3 from "./portfolioV3.png";
import SUF from "./suf.png";
import GT from "./social-app1.png";
import VC from "./videochat.png";
import HW from "./helloworld.png";
import BL from "./finalblog.png";
import EC from "./ecommercefinal.png";
import MS from "./moviesite.png";

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
                                    <a href="https://joshuapsiyame.netlify.app/" className="card-list-item-link">
                                        <MdPreview size={25} color="#e5e5e5" />
                                    </a>
                                </li>
                            </ol>
                        </div>
                        <div className="project-card">
                            <img src={EC} alt="" className="project-img" />
                            <p className="normal-text"><strong>E - Commerce (Coming soon)</strong></p>
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
                            <img src={MS} alt="" className="project-img" />
                            <p className="normal-text"><strong>MovieSite (status: CI/CD)</strong></p>
                            <ol id="card-list">
                                <li className="card-list-item">
                                    <a href="" className="card-list-item-link">
                                        <FaGithub size={25} color="#e5e5e5" />
                                    </a>
                                </li>
                                <li className="card-list-item">
                                    <a href="https://moviesfiles.netlify.app" className="card-list-item-link">
                                        <MdPreview size={25} color="#e5e5e5" />
                                    </a>
                                </li>
                            </ol>
                        </div>
                        <div className="project-card">
                            <img src={VC} alt="" className="project-img" />
                            <p className="normal-text"><strong>Real Time Video chat (Coming soon)</strong></p>
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
                            <img src={GT} alt="" className="project-img" />
                            <p className="normal-text"><strong>Social media app (Coming soon)</strong></p>
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
                            <img src={BL} alt="" className="project-img" />
                            <p className="normal-text"><strong>Blog (status: CI/CD)</strong></p>
                            <ol id="card-list">
                                <li className="card-list-item">
                                    <a href="https://github.com/JoshuaSiyame/Josh-Tech-Articles" className="card-list-item-link">
                                        <FaGithub size={25} color="#e5e5e5" />
                                    </a>
                                </li>
                                <li className="card-list-item">
                                    <a href="https://joshtecharticles.netlify.app/" className="card-list-item-link">
                                        <MdPreview size={25} color="#e5e5e5" />
                                    </a>
                                </li>
                            </ol>
                        </div>
                        <div className="project-card">
                            <img src={SUF} alt="" className="project-img" />
                            <p className="normal-text"><strong>Url Shortener</strong></p>
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
                            <img src={HW} alt="" className="project-img" />
                            <p className="normal-text"><strong>"Hello, World 😃😂"</strong></p>
                            <ol id="card-list">
                                <li className="card-list-item">
                                    <a href="https://github.com/JoshuaSiyame/Hello-world" className="card-list-item-link">
                                        <FaGithub size={25} color="#e5e5e5" />
                                    </a>
                                </li>
                                <li className="card-list-item">
                                    <a href="https://jps-hello-world.netlify.app" className="card-list-item-link">
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