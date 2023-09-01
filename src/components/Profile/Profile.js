// import modules/packages
import React from "react";
import "./Profile.css";

// import profile image
import ProfileImg from "./profileImg.JPG";

// profile component 
const Profile = () => {
    return (
        <div id="profile">
            <div id="profile-container" className="e-container">
                <h1 className="section-header section-header-position">Profile</h1>
                <div id="profile-contents">
                    <div id="profile-about-me-container">
                        <h2 className="section-sub-header-1">About Me</h2>
                        <p className="normal-text">
                            I'm Joshua P. Siyame, a full-stack developer with a passion for both
                            Frontend and Backend development I have a deep understanding of the
                            latest technologies and frameworks in the industry.
                        </p>
                        <p className="normal-text">
                            I enjoy making exceptional digital end products.
                        </p>
                    </div>
                    <div id="profile-image-container">
                        <img src={ProfileImg} alt="" id="profile-img" />
                    </div>
                    <div id="profile-details-container">
                        <h2 className="section-sub-header-1">Details</h2>
                        <ol id="details-list">
                            <li className="normal-text details-list-item">
                                <span style={{ display: "block", margin: ".5em 0" }}><strong>Name:</strong></span>
                                <span style={{ display: "block", margin: ".5em 0" }}>Joshua P. Siyame</span>
                            </li>
                            <li className="normal-text details-list-item">
                                <span style={{ display: "block", margin: ".5em 0" }}><strong>Age:</strong></span>
                                <span style={{ display: "block", margin: ".5em 0" }}>24 yrs</span>
                            </li>
                            <li className="normal-text details-list-item">
                                <span style={{ display: "block", margin: ".5em 0" }}><strong>Location:</strong></span>
                                <span style={{ display: "block", margin: ".5em 0" }}>Dar-es-Salaam, Tanzania</span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;