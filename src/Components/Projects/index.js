import './style.scss'
import ProjectsCard from '../ProjectsCard'
import data from '../../data.json'

function Projects() {

  const dataProjects = data[1].map(project => {
    return (
      <ProjectsCard title={project.title} image={project.image} url={project.url} />
    )
  })


  return (
    <div>
      <h2 className='flex-center-column mt-3'>Projects</h2>
      <div className='flex-center-row card-alignments mt-3' >
        {dataProjects}
      </div>
    </div>
  )
}

export default Projects
