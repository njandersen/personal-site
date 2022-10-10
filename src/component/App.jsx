import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./About";
import Greeting from "./Greeting";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Icons from "./UI/Icons";
import NavBar from "./UI/NavBar";

function App() {
  return (
    <main>
      <Router>
        <NavBar />
      </Router>
      <Greeting />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Icons />
      <Footer />
    </main>
  );
}

export default App;
