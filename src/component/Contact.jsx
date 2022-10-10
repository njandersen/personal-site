import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl text-teal-400">Get In Touch</h1>
        <p className="ml-10">
          I would love the opportunity to learn more about my craft and make new
          and interesting things.
        </p>
        <button className="bg-teal-400 text-white rounded  mt-10 h-10 w-40 hover:bg-white hover:border-teal-400 hover:border-2 hover:text-teal-400">
          <a href="mailto:njandersen22@gmail.com">Contact Me</a>
        </button>
      </div>
    </section>
  );
}

export default Contact;
