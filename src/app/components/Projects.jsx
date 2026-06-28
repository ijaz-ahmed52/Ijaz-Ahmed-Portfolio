import { projects } from "../data/data";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#0F172A] text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#38BDF8]">
          Featured Projects
        </h2>

        <p className="text-gray-300 text-center max-w-3xl mx-auto mt-4 mb-14">
          Here are some of the projects I've built using React.js, Next.js,
          JavaScript, and Tailwind CSS. Each project reflects my focus on
          creating responsive, user-friendly, and maintainable web
          applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1E293B] rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-[#38BDF8] mb-3">
                {project.title}
              </h3>

              <p className="text-sm text-cyan-300 mb-4">{project.tech}</p>

              <p className="text-gray-300 leading-7 mb-5">
                {project.description}
              </p>

              <ul className="space-y-2 text-gray-300 mb-6">
                {project.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>

              <div className="mt-auto flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-cyan-500 hover:bg-cyan-600 transition rounded-lg py-2 font-semibold"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition rounded-lg py-2 font-semibold"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;