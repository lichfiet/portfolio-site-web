import projectsData from '../projects.json';

function ProjectCard({ project }) {
  return (
    <article className="rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="aspect-video bg-neutral-300 dark:bg-neutral-700 overflow-hidden flex items-center justify-center">
        {project.imgSrc ? (
          <img
            src={project.imgSrc}
            alt={project.name}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <span className="text-4xl font-semibold text-neutral-500 dark:text-neutral-500 select-none" aria-hidden>
            {project.name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
          {project.name}
        </h2>
        <div className="space-y-2 flex-grow">
          {project.about.map((paragraph, i) => (
            <p key={i} className="text-sm text-neutral-700 dark:text-neutral-300 indent-2">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-full bg-neutral-300 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-black dark:text-white bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500 px-3 py-1.5 rounded-lg transition-colors"
            >
              <span aria-hidden>↗</span>
              View live
            </a>
          )}
          {project.repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-neutral-800 dark:bg-neutral-600 hover:bg-neutral-700 dark:hover:bg-neutral-500 px-3 py-1.5 rounded-lg transition-colors"
            >
              <i className="fab fa-github" aria-hidden />
              {repo.name}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const projects = [...projectsData].sort(
    (a, b) => new Date(b.started_date) - new Date(a.started_date)
  );

  return (
    <div className="text-black dark:text-white container mx-auto px-4 py-6 mb-4">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Projects</h1>
        <p className="text-center text-neutral-600 dark:text-neutral-400 mt-2 max-w-xl mx-auto">
          A selection of things I’ve built and worked on.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
