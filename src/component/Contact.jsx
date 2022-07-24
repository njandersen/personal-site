import { Button } from "../Button";
import React, { useEffect, useState } from 'react'

function Contact() {
    const [button, setButton] = useState(true);

    return(
        <section id="contact">
            <div className="getInTouch">
                <h1 className="contactHeading">Get In Touch</h1>
                <p className="contactBody">I would love the opportunity to learn more about my craft and make new and interesting things.</p>
                    {button ? (
                        <a href='mailto:njandersen22@gmail.com' className='btn-link'>
                            <Button buttonStyle='btn--outline'>Contact Me</Button>
                        </a>
                    ) : (
                        <a href='mailto:njandersen22@gmail.com' className='btn-link'>
                            <Button buttonStyle='btn--outline' buttonSize='btn--moblie'>Contact Me</Button>
                        </a>
                    )}
            </div>
        </section>
        
    );
}

export default Contact;