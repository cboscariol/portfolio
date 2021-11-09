import './style.scss'
import ProjectsCard from '../ProjectsCard'

function Projects() {
  return (
    <div>
      <h2 className='flex-center-column mt-3'>Projects</h2>
      <div className='flex-center-row card-alignments mt-3' >
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </div>
  )
}

export default Projects
