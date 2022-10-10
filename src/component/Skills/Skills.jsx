import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

import SkillCard from "./SkillCard";
import SkillsSummary from "./SkillsSummary";

function Skills() {
  const card1Title = "Front End ";
  const card2Title = "Back End";
  const frontendSkills = [
    { name: "React" },
    { name: "Javascript" },
    { name: "HTML" },
    { name: "CSS/Tailwind/Sass" },
  ];
  const backendSkills = [
    { name: "Node.js" },
    { name: "Next.js" },
    { name: "Express" },
    { name: "Firebase" },
    { name: "MongoDB" },
  ];

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="skills">
      <div>
        <SkillsSummary />
        <div className="md:flex md:justify-center md:flex-row">
          <SkillCard
            title={card1Title}
            skill={frontendSkills.map((skill) => (
              <li>{skill.name}</li>
            ))}
          />
          <SkillCard
            title={card2Title}
            skill={backendSkills.map((skill) => (
              <li>{skill.name}</li>
            ))}
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
