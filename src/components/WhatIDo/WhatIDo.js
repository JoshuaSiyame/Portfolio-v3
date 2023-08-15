// import modules/packages
import React from "react";
import "./WhatIDo.css";

// import icons
import { PiStrategyDuotone } from "react-icons/pi";
import { MdDesignServices } from "react-icons/md";
import { TbDeviceDesktopCode, TbSettings } from "react-icons/tb";
import { BsTools } from "react-icons/bs";

// what i do component
const WhatIDo = () => {
    return (
        <div id="what-i-do">
            <div id="what-i-do-container" className="e-container">
                <div id="what-i-do-content">
                    <h1 className="section-header">What I Do</h1>
                    <div id="what-i-do-cards-container">
                        <div className="what-i-do-card">
                            <span className="what-i-do-icon">
                                <PiStrategyDuotone size={40} color="#e5e5e5" />
                            </span>
                            <h3 className="" style={{color: "#e5e5e5",textAlign: "center", marginTop: "1em"}}>Strategy</h3>
                            <p className="normal-text" style={{textAlign: "center"}}>
                                Sample text. Click to select the text box. Click again or double click to start editing the text. 
                                Sample text. Click to see Sample text. <br />Click to select the text box. Click again or double click 
                                to start editing the text. Sample text. Click to see
                            </p>
                        </div>
                        <div className="what-i-do-card">
                            <span className="what-i-do-icon">
                                <MdDesignServices size={40} color="#e5e5e5" />
                            </span>
                            <h3 className="" style={{color: "#e5e5e5",textAlign: "center", marginTop: "1em"}}>Design</h3>
                            <p className="normal-text" style={{textAlign: "center"}}>
                                Sample text. Click to select the text box. Click again or double click to start editing the text. 
                                Sample text. Click to see Sample text. <br />Click to select the text box. Click again or double click 
                                to start editing the text. Sample text. Click to see
                            </p>
                        </div>
                        <div className="what-i-do-card">
                            <span className="what-i-do-icon">
                                <TbDeviceDesktopCode size={40} color="#e5e5e5" />
                            </span>
                            <h3 className="" style={{color: "#e5e5e5",textAlign: "center", marginTop: "1em"}}>Development</h3>
                            <p className="normal-text" style={{textAlign: "center"}}>
                                Sample text. Click to select the text box. Click again or double click to start editing the text. 
                                Sample text. Click to see Sample text. <br />Click to select the text box. Click again or double click 
                                to start editing the text. Sample text. Click to see
                            </p>
                        </div>
                        <div className="what-i-do-card">
                            <span className="what-i-do-icon">
                                <BsTools size={40} color="#e5e5e5" />
                            </span>
                            <h3 className="" style={{color: "#e5e5e5",textAlign: "center", marginTop: "1em"}}>Testing</h3>
                            <p className="normal-text" style={{textAlign: "center"}}>
                                Sample text. Click to select the text box. Click again or double click to start editing the text. 
                                Sample text. Click to see Sample text. <br />Click to select the text box. Click again or double click 
                                to start editing the text. Sample text. Click to see
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIDo;