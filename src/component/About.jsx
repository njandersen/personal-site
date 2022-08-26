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
      <section id="about">
        <div className="container">
          <div className="about-heading" data-Aos="fade-up">
            <h1>About Me</h1>
          </div>
          <div className="row about__row">
            <div className="col">
              <div className="about__text-wrapper" data-Aos="fade-up">
                <p>
                  My name is Nicholas Jordan Andersen. I love building websites
                  and android apps. I started studying Computer Science in 2019
                  although I have always had a passion for technology and
                  coding.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="about__img-wrapper" data-Aos="fade-up">
                <img
                  className="my-pic"
                  src="../files/portfolio-pic.jpg"
                  alt="My Pic"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
