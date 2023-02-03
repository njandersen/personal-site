import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

import SkillsSummary from "./SkillsSummary";
import Accordion from "../UI/Accordion";

function Skills() {
  const skills = [
    {
      id: "1",
      label: "Front End",
      skillList: ["React", "JavaScript", "HTML", "CSS/Tailwind/Sass"],
    },
    {
      id: "2",
      label: "Back End",
      skillList: [
        "Node.js",
        "Next.js",
        "Express",
        "Firebase",
        "MongoDB",
        "Prisma",
        "PostgreSQL",
      ],
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="skills">
      <div>
        <SkillsSummary />
        <div className="w-2/3  ml-20 md:ml-48">
          {/* <SkillCard
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
          /> */}
          <Accordion skills={skills} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
