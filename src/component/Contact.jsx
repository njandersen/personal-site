import React from "react";

function Contact() {
    return(
        <section id="contact">
            <div className="getInTouch">
                <h1 className="contactHeading">Get In Touch</h1>
                <p className="contactBody">I would love the opportunity to learn more about my craft and make new and interesting things.</p>
                <a href="mailto:njandersen22@gmail.com">
                <button className="contact">Contact Me.</button>
                </a>
            </div>
        </section>
        
    );
}

export default Contact;