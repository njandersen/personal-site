import React from "react";

function Greeting() {
  return (
    <section id="greeting">
      <div className="flex justify-center flex-col items-center mt-20">
        <h3 className="text-2xl">Hello There,</h3>
        <img
          className="relative mx-auto rounded-full w-80 h-80 mt-20 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
          src="../files/portfolio-pic.jpg"
          alt="My Pic"
        ></img>

        <h1 className=" text-teal-400 text-6xl pt-20 pl-20 pb-10  md:pl-3">
          I'm N. J. Andersen.
        </h1>
        <h3 className="text-2xl mb-20">Full stack web engineer</h3>
      </div>
    </section>
  );
}

export default Greeting;
