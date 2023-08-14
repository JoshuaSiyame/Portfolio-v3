// import modules/packages
import React from "react";
import "./App.css";

// import components
import Footer from "./Utils/Footer/Footer"
import ContactMe from "./ContactMe/ContactMe";

// app component
const App = () => {

    return (
        <div id="app-structure">
            <ContactMe />
            <Footer />
        </div>
    );
};

// export component
export default App;