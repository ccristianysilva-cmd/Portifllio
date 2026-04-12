import React from 'react';
import projects from "../data/projects";

const Projects = () => {
    return (
        <section>
            <h2>Meus Projetos</h2>
            <div className="projects-container">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <p><strong>Tecnologias:</strong> {project.tech}</p>
                        
                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                🔗 GitHub
                            </a>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                👁️ Ver projeto
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;