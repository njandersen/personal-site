import "aos/dist/aos.css";

function Projects() {
  return (
    <>
      <section id="projects">
        <h1 className="projects-heading">Projects</h1>
        <div className="project-container">
          <div className="card project1-card" data-Aos="fade-right">
            <h2>Personal Blog Site</h2>
            <img
              className="project1-img"
              src="../files/blog screenshot.png"
              alt="project1"
            />
            <h3>
              A simple Blog site built in Next.js and Firebase. It can be found
              at the link below.
            </h3>
            <a
              href="https://personal-blog-njandersen.vercel.app/"
              className="project1-link"
            >
              Personal Blog
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default Projects;
