import { myProjects } from '../constants/index.js';

const Projects = () => {
  return (
    <section className="c-space my-20" id="projects">
      <p className="head-text">My Selected Work</p>
      
      <div className="mt-12 grid gap-8">
        {myProjects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="flex flex-col gap-4 p-6 shadow-2xl shadow-black-200 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={project.logoStyle}>
                  <img className="w-10 h-10 shadow-sm" src={project.logo} alt="logo" />
                </div>
                <h3 className="text-white text-2xl font-semibold">{project.title}</h3>
              </div>
              
              <div className="flex flex-col gap-4 text-white-600">
                <p>{project.desc}</p>
                <p>{project.subdesc}</p>
              </div>
              
              <div className="flex items-center gap-3 flex-wrap">
                {project.tags.map((tag, i) => (
                  <div key={i} className="tech-logo">
                    <img src={tag.path} alt={tag.name} />
                  </div>
                ))}
              </div>
              
              <iframe 
                src={project.href}
                className="w-full h-[500px] border border-black-300 rounded-lg mt-4"
                title={project.title}
                allowFullScreen
              />
              
              <a
                className="flex items-center gap-2 cursor-pointer text-white-600 mt-4"
                href={project.href}
                target="_blank"
                rel="noreferrer">
                <p>Open in New Tab</p>
                <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
