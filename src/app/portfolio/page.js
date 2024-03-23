import * as React from 'react';
import ProjectCard from './ProjectCard';
import Stack from '@mui/material/Stack';
import projects from './projectList';

export default function Home() {

  const projectCards = projects.map(project => {
    return (
    <Stack xs={3}>
      <ProjectCard project={project} key={project.name}/>
    </Stack>
    )
  });

  return (
    <main>
      <Stack container
        direction="row"
        spacing={5}
        width={'90vw'}
        position={'absolute'}
        left={'7%'}
        top={'30%'}>

      {projectCards}

      </Stack>
    </main>
  );
}
