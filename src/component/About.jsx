import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function About() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);


    return (
        <section id="about">
        <div className="aboutHeading" data-Aos='fade-up'>
            <h2>About Me</h2>
        </div>
        <div className="aboutContainer">
            <div className="aboutBody" data-Aos='fade-up'>
                <p>
                        My name is Nicholas Jordan Andersen. I love building websites and android apps.
                        I started studying Computer Science in 2019 although I have always had a passion
                        for technology and coding. 
                </p>
            </div>
            <div className="pic" data-Aos='fade-up'>
                    <img className="myPic" src='../files/DJ-9331.jpg'></img>
            </div>
        </div>
        </section>
    );
}

export default About;