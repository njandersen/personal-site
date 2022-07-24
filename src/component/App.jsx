import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import About from "./About";
import Greeting from "./Greeting";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Icons from "./Icons";
import NavBar from "./NavBar";

function App() {
    return (
        <main>
        <Router>
            <NavBar />
        </Router>
        <Greeting />
        <About />
        <Skills />
        <Contact />
        <Icons />
        <Footer /> 

        </main>
    )
}

export default App;