function Project({ image, title, deployedLink, githubLink }) {
    return (
      <div className="project">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <div className="project-links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      </div>
    );
  }
  
  export default Project;