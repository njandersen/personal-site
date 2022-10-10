import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "./Skills.scss";
import SkillCard from "./SkillCard";
import SkillsSummary from "./SkillsSummary";

function Skills() {
  const card1Title = "Front End ";
  const card2Title = "Back End";
  const frontendSkills = ["React", "Javascript", "CSS/HTML", "Sass"];
  const backendSkills = ["Node.js", "Next.js", "Firebase"];

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="skills">
      <div className="skills-container">
        <SkillsSummary />
        <div className="skills-cards">
          <SkillCard
            title={card1Title}
            skill1={frontendSkills[0]}
            skill2={frontendSkills[1]}
            skill3={frontendSkills[2]}
            skill4={frontendSkills[3]}
          />
          <SkillCard
            title={card2Title}
            skill1={backendSkills[0]}
            skill2={backendSkills[1]}
            skill3={backendSkills[2]}
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
