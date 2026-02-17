import { Link } from 'react-router-dom';
import projectsData from '../projects.json';

const RECENT_COUNT = 3;

function RecentProjects() {
  const projects = [...projectsData]
    .sort((a, b) => new Date(b.started_date) - new Date(a.started_date))
    .slice(0, RECENT_COUNT);

  return (
    <section className="mt-8">
      <h2 className="text-center text-2xl font-medium text-black dark:text-white mb-6">
        Recent Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects.map((project) => (
          <Link
            key={project.name}
            to="/projects"
            className="group block rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
          >
            <div className="p-4">
              <h3 className="font-semibold text-lg text-black dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                {project.about[0]}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-0.5 rounded-full bg-neutral-300 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-black dark:text-white font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded"
        >
          View all projects
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}

export default RecentProjects;
