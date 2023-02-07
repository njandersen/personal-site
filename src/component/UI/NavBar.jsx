import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

import { Button } from "./Button";

function Nav(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [button, setButton] = useState(true);

  let Links = [
    { name: "About", link: "/#about" },
    { name: "Skills", link: "/#skills" },
    { name: "Contact", link: "/#contact" },
    { name: "Projects", link: "/#projects" },
    { name: "Blog", link: "https://personal-blog-njandersen.vercel.app/" },
  ];

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div>
      <nav className="bg-teal-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-3xl text-white">
                <Link to="/">N. J. ANDERSEN</Link>
              </div>
              <div className="hidden md:block">
                <ul className="ml-10 flex items-baseline space-x-4">
                  {Links.map((Link) => (
                    <li className="h-4 p-4 text-lg text-white">
                      <a
                        href={Link.link}
                        className="hover:border-b-2 border-white md:table"
                      >
                        {Link.name}
                      </a>
                    </li>
                  ))}
                  <li>
                    {button ? (
                      <a href="../files/ResumeV3.pdf" className="btn-link">
                        <Button buttonStyle="btn--outline">Resume</Button>
                      </a>
                    ) : (
                      <a href="../files/ResumeV4.pdf" className="btn-link">
                        <Button
                          buttonStyle="btn--outline"
                          buttonSize="btn--moblie"
                        >
                          Resume
                        </Button>
                      </a>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <ul ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {Links.map((Link) => (
                  <li className="h-4 p-4 text-lg text-white">
                    <a
                      href={Link.link}
                      className="hover:border-b-2 border-white md:table"
                    >
                      {Link.name}
                    </a>
                  </li>
                ))}
                <li>
                  {button ? (
                    <a href="../files/ResumeV3.pdf" className="btn-link">
                      <Button buttonStyle="btn--outline">Resume</Button>
                    </a>
                  ) : (
                    <a href="../files/ResumeV3.pdf" className="btn-link">
                      <Button
                        buttonStyle="btn--outline"
                        buttonSize="btn--moblie"
                      >
                        Resume
                      </Button>
                    </a>
                  )}
                </li>
              </ul>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
