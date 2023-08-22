import React from "react";
import ProjectListCard from "./ProjectListCard";
import ProjectData from "../interfaces/ProjectProps";

import projectsData from "../data/projects.json";

// Use the data in your component
const ProjectList: React.FC = () => {
  // const projects: ProjectData[] = projectsData;

  // Highlighted projects already go to the highlighted area.
  // Don't put them there again.
  const nonHighlightedProjects: ProjectData[] = projectsData.filter(
    (project) => !project.highlighted
  );

  return (
    <section className="project-list">
      <h2>Other Projects</h2>
      <div className="project-grid">
        {nonHighlightedProjects.map((project) => (
          <ProjectListCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
