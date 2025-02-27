import Project from '../components/Project';

function Portfolio() {
  const projects = [
    {
      image: '/assets/images/project2.jpg',
      title: 'README Generator',
      githubLink: 'https://github.com/JustinTylerRosado/README-Generator'
    },
    {
      image: '/assets/images/project1.jpg',
      title: 'Employee Tracker',
      githubLink: 'https://github.com/JustinTylerRosado/EmployeeTracker'
    },
    {
      image: '/assets/images/project3.jpg',
      title: 'Goal Tracker',
      githubLink: 'https://github.com/marylfisher/GoalTrackerProject'
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project
            key={index}
            image={project.image}
            title={project.title}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;