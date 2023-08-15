// import modules/packages
import React from "react";
import "./App.css";

// import components
import Footer from "./Utils/Footer/Footer"
import ContactMe from "./ContactMe/ContactMe";
import Projects from "./Projects/Projects";
import WhatIDo from "./WhatIDo/WhatIDo";
import Skills from "./Skills/Skill";
import AboutMe from "./AboutMe/AboutMe";
import Profile from "./Profile/Profile";
import Intro from "./Intro/Intro";
import TopNav from "./Utils/TopNav/TopNav";

// app component
const App = () => {

    return (
        <div id="app-structure">
            <TopNav />
            <Intro />
            <Profile />
            <AboutMe />
            <Skills />
            <WhatIDo />
            <Projects />
            <ContactMe />
            <Footer />
        </div>
    );
};

// export component
export default App;