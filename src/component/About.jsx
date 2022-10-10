import React from "react";
import Aos from "aos";
import { useEffect } from "react";

import Icons from "./UI/Icons";

import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="about">
      <div className="flex justify-center items-center flex-col mt-20">
        <div data-Aos="fade-up">
          <h1 className="text-teal-400 text-3xl pb-10">About Me</h1>
        </div>
        <div>
          <div>
            <div data-Aos="fade-up">
              <p className="text-black text-xl ml-10 md:max-w-6xl">
                My name is Nicholas Jordan Andersen. I've been studying computer
                science since 2019. Since then I have fell in love with React
                and Next.js specifically. I enjoy making modern sites with a
                simplistic, sleek design.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Icons />
    </section>
  );
}

export default About;
