import * as React from 'react';
import ProjectCard from './ProjectCard';
import projects from './projectList';


export default function Home() {

  const projectCards = projects.map(project => {
    return (<ProjectCard project={project} key={project.name}/>)
  });

  return (
    <main>
      {projectCards}
    </main>
  );
}
