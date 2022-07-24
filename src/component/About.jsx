import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function About() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);


    return (
       <>
        <section id='about'>
            <div className="container">
                <div className="about-heading" data-Aos='fade-up'>
                    <h2>About Me</h2>
                </div>
                <div className="row about__row">
                    <div className="col">
                        <div className="about__text-wrapper" data-Aos='fade-up'>
                            <p>
                                My name is Nicholas Jordan Andersen. I love building websites and android apps.
                                I started studying Computer Science in 2019 although I have always had a passion
                                for technology and coding.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="about__img-wrapper" data-Aos='fade-up'>
                            <img className="my-pic" src='../files/DJ-9331.jpg' alt="My Pic"></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       </>
    );
}

export default About;

{/* <section id="about">
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
</section> */}