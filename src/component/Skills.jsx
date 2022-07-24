import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function Skills() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return(
        <section id="skills">
            <div className="skillHeader" data-Aos='fade-up'>
                <h2>Skills</h2>
            </div>
            <div className="row-skill">
            <div className="col-skill">
            <div className="web" data-Aos='fade-left'>
                <h3>Full Stack Web</h3>
                <div className="webLang">
                <ul>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>mongoDB</li>
                </ul>
                </div>
            </div>
            </div>
            <div className="col-skill">
                <p className="webAbout" data-Aos='fade-left'>
                    Web development is something that I have gained a new pasion for. 
                    I think react has opened doors to more possiblities when it comes 
                    to web design. 
                </p>
            </div>
            </div>
            <div className="row-skill">
            <div className="col-skill">
            <div className="android" data-Aos='fade-right'>
                <h3>Android Development</h3>
                <div className="androidLang">
                    <ul>
                        <li>Java</li>
                        <li>XML</li>
                        <li>SQlite</li>
                        <li>Android Studio</li>
                        <li>Android ROOM</li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="col-skill">
                <p className="androidAbout" data-Aos='fade-right'>
                    I have always been a fan of the Andorid platform. Designing apps for it is something I love to do.
                    I have experince building apps from the ground up with databases and backend servers. 
                </p>
                </div>
            </div>
    
        </section>
    );
}

export default Skills;