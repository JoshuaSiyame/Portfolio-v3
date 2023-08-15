// import modules/packages
import React from "react";
import "./Skill.css";

// skill component 
const Skills = () =>{
    return (
        <div id="skills">
            <div id="skills-container" className="e-container">
                <h1 className="section-header">Skills</h1>
                <div id="skills-contents">
                    <div className="skill-set">
                        <h2 className="section-sub-header-1">Front - Ends</h2>
                        <ol className="skill-list">
                            <li className="normal-text skill-list-item">Html</li>
                            <li className="normal-text skill-list-item">CSS</li>
                            <li className="normal-text skill-list-item">JavaScript</li>
                            <li className="normal-text skill-list-item">React.js</li>
                            <li className="normal-text skill-list-item">Next.js</li>
                        </ol>
                    </div>
                    <div className="skill-set">
                        <h2 className="section-sub-header-1">Back - Ends</h2>
                        <ol className="skill-list">
                            <li className="normal-text skill-list-item">Express.js</li>
                            <li className="normal-text skill-list-item">Django</li>
                            <li className="normal-text skill-list-item">FastAPI</li>
                            <li className="normal-text skill-list-item">Flask</li>
                        </ol>
                    </div>
                    <div className="skill-set">
                        <h2 className="section-sub-header-1">Databases</h2>
                        <ol className="skill-list">
                            <li className="normal-text skill-list-item">MongoDB</li>
                            <li className="normal-text skill-list-item">PostgreSQL</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;