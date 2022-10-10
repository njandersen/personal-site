import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

//Renders icons for websites at the bottom of the page useing react-icons.
class ContactIcons extends React.Component {
  render() {
    return (
      <div className="flex flex-row justify-center items-center text-center mt-6">
        <a className="text-teal-400 px-10" href="https://github.com/njandersen">
          <FaGithubSquare size={42} />
        </a>
        <a
          className="text-teal-400"
          href="https://www.linkedin.com/in/nicholas-andersen-962b60121/"
        >
          <FaLinkedinIn size={42} />
        </a>
      </div>
    );
  }
}

export default ContactIcons;
