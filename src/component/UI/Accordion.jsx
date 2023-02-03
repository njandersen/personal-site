import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ skills }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((current) => {
      if (current === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedItems = skills.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const renderedSkills = item.skillList.map((skill) => {
      return (
        <li className="p-1" key={skill}>
          {skill}
        </li>
      );
    });

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-teal-400 text-white border-b items-center cursor-pointer "
          onClick={() => handleClick(index)}
        >
          {item.label}
          {isExpanded ? (
            <GoChevronDown className="animate-bounce" />
          ) : (
            <GoChevronLeft />
          )}
        </div>
        <ul>{isExpanded && renderedSkills}</ul>
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
