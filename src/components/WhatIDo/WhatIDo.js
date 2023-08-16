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
                    <h1 className="section-header section-header-position">What I Do</h1>
                    <div id="what-i-do-cards-container">
                        <div className="what-i-do-card">
                            <span className="what-i-do-icon">
                                <PiStrategyDuotone size={40} color="#e5e5e5" />
                            </span>
                            <h3 className="" style={{ color: "#e5e5e5", textAlign: "center", marginTop: "1em" }}>Strategy</h3>
                            <p className="normal-text" style={{ textAlign: "center" }}>
                                I devise actionable plans, aligning project goals
                                with market trends and business objectives for optimal outcomes.
                            </p>
                        </div>
                        <div className="what-i-do-card">
                            <span className="what-i-do-icon">
                                <MdDesignServices size={40} color="#e5e5e5" />
                            </span>
                            <h3 className="" style={{ color: "#e5e5e5", textAlign: "center", marginTop: "1em" }}>Design</h3>
                            <p className="normal-text" style={{ textAlign: "center" }}>
                                I create intuitive and visually appealing solutions,
                                blending aesthetics with functionality to meet user needs effectively.
                            </p>
                        </div>
                        <div className="what-i-do-card">
                            <span className="what-i-do-icon">
                                <TbDeviceDesktopCode size={40} color="#e5e5e5" />
                            </span>
                            <h3 className="" style={{ color: "#e5e5e5", textAlign: "center", marginTop: "1em" }}>Development</h3>
                            <p className="normal-text" style={{ textAlign: "center" }}>
                                I bring ideas to life through clean and efficient code,
                                crafting robust software solutions with a focus on scalability.
                            </p>
                        </div>
                        <div className="what-i-do-card">
                            <span className="what-i-do-icon">
                                <BsTools size={40} color="#e5e5e5" />
                            </span>
                            <h3 className="" style={{ color: "#e5e5e5", textAlign: "center", marginTop: "1em" }}>Testing</h3>
                            <p className="normal-text" style={{ textAlign: "center" }}>
                                I ensure product quality by meticulously evaluating functionality,
                                identifying issues, and refining code for a seamless user experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIDo;