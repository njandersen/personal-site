import "aos/dist/aos.css";

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center my-20"
    >
      <h1 className="text-teal-400 text-3xl py-20">Projects</h1>
      <div className="md:flex-row md:flex md:justify-center md:items-center">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-teal-400 text-2xl">
            <a
              href="https://personal-blog-njandersen.vercel.app/"
              className="project1-link"
            >
              Personal Blog
            </a>
          </h2>
          <img
            className="border-2 rounded-lg ml-10 w-10/12 shadow-xl "
            src="../files/blog screenshot.png"
            alt="project1"
          />
          <h3 className="ml-10 w-10/12">
            A simple Blog site built in Next.js and Firebase. It can be found at
            the link below.
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center my-20">
          <h2 className="text-teal-400 text-2xl">
            <a
              href="https://guardian-dispatch.vercel.app/"
              className="project1-link"
            >
              Guardian Dispatch
            </a>
          </h2>
          <img
            className="border-2 rounded-lg ml-10 w-10/12 shadow-xl "
            src="../files/guardian-dispatch.png"
            alt="project2"
          />
          <h3 className="ml-10 w-10/12">
            A social site I built for players of the game Destiny 2
          </h3>
        </div>
      </div>
    </section>
  );
}
export default Projects;
