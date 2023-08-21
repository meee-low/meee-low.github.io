import React from "react";
import ProjectListCard from "./ProjectListCard";
import ProjectData from "../interfaces/ProjectProps";

import projectsData from "../data/projects.json";

// Use the data in your component
const ProjectList: React.FC = () => {
  const projects: ProjectData[] = projectsData;

  return (
    <section className="project-list">
      <h2>Other Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectListCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
