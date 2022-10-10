import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./Icons.scss";

//Renders icons for websites at the bottom of the page useing react-icons.
class ContactIcons extends React.Component {
  render() {
    return (
      <div className="icons">
        <a className="github" href="https://github.com/njandersen">
          <FaGithubSquare size={42} />
        </a>
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/nicholas-andersen-962b60121/"
        >
          <FaLinkedinIn size={42} />
        </a>
      </div>
    );
  }
}

export default ContactIcons;
