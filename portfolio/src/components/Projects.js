const Projects = () => {
    const projects = [
      {
        title: 'Task Manager App',
        description: 'A web app to manage and prioritize tasks.',
        github: 'https://github.com/amanjotubhi/task-manager',
        demo: '#',
      },
      {
        title: 'Weather Dashboard',
        description: 'Real-time weather updates using OpenWeatherMap API.',
        github: 'https://github.com/amanjotubhi/weather-dashboard',
        demo: '#',
      },
    ];
  
    return (
      <section id="projects" className="text-center py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-green-500">Projects</h2>
        <div className="mt-6">
          {projects.map((project, index) => (
            <div key={index} className="mb-6 p-4 border rounded bg-white">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <div className="mt-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-green-500 underline">
                  View on GitHub
                </a>
                {' | '}
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-green-500 underline">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  