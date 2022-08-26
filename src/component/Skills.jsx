import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="skills">
      <div className="skills-header" data-Aos="fade-down">
        <h1>Skills & Experience</h1>
        <p className="skills-about">
          Ever since I started my computer science program in 2019, I've been on
          a mission to learn as much as possible. It took me a while to finally
          find a tech stack that I really and truly enjoyed working on. I
          thought it was java. But eventually I landed on Javascript, more
          specifically react. I've enjoyed building sites with various different
          stacks and I would love an opportunity to show off my skills
        </p>
      </div>
      <div className="card frontend-skills" data-Aos="fade-up">
        <ul className="skills-list">
          <h2>Front End Development</h2>
          <li>React</li>
          <li>Javascript</li>
          <li>CSS/HTML</li>
        </ul>
      </div>
      <div className="card backend-skills" data-Aos="fade-up">
        <ul>
          <h2>Back End Development</h2>
          <li>Node.js</li>
          <li>Next.js</li>
          <li>Firebase</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
