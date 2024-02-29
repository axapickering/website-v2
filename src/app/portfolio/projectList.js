function createProjectItem(name, stack, github, demo, description) {
  return { name, stack, github, demo, description };
}

const projectData = [
  ['How to gym (working name)',
    'Javascript, Next.js, Material UI',
    'https://github.com/axapickering/how-to-gym',
    '#',
    'Educational fitness app suitable for users of variable skill/knowledge levels'
  ],

  ['ShareBnb',
    'Javascript, Next.js, Material UI',
    'https://github.com/axapickering/how-to-gym',
    '#',
    'Educational fitness app suitable for users of variable skill/knowledge levels'
  ],

  ['Jobly',
    'Javascript, Next.js, Material UI',
    'https://github.com/axapickering/how-to-gym',
    '#',
    'Educational fitness app suitable for users of variable skill/knowledge levels'
  ],

  ['Warblr',
    'Javascript, Next.js, Material UI',
    'https://github.com/axapickering/how-to-gym',
    '#',
    'Educational fitness app suitable for users of variable skill/knowledge levels'
  ],
]

const projects = projectData.map(project => {
  return createProjectItem(project)
});

export default projects;
