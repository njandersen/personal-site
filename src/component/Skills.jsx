import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function Skills() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return(
        <section className="skills">
            <div className="skillHeader" data-Aos='fade-up'>
                <h2>Skills</h2>
            </div>
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
                <p>
                    Web development is something that I have gained a new pasion for. 
                    I think react has opened doors to more possiblities when it comes 
                    to web design. 
                </p>
            </div>
        </section>
    );
}

export default Skills;