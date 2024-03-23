function createProjectItem(name, stack, github, demo, description) {
  return { name, stack, github, demo, description };
}

const projects = [
  createProjectItem(
    'How to gym',
    'Javascript, Next.js, Material UI',
    'https://github.com/axapickering/how-to-gym',
    '#',
    'Educational fitness app suitable for users of variable skill/knowledge levels'
  ),

   createProjectItem(
    'ShareBnb',
    'React, React-DOM , Flask, Jest, JWT, boto3',
    'https://github.com/axapickering/sharebnb',
    '#',
    'AirBnb-like space rental and booking site'
  ),

   createProjectItem(
    'Jobly',
    'Express.js, JSONSchema, Bcrypt, CORS, Morgan',
    'https://github.com/axapickering/express-jobly',
    '#',
    'Job board including various companies and roles, with search features'
  ),

   createProjectItem(
    'Warbler',
    'Flask, SQLAlchemy ORM, Flask-WTForms, Bcrypt, Jinja',
    'https://github.com/axapickering/warbler',
    '#',
    'Messaging board with profiles, allows users to follow and be followed, as well as post messages.'
  ),
]

export default projects;
