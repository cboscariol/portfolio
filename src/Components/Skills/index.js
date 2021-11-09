import './style.scss'
import Card from '../SkillCard/index'

function Skills() {
  return (
    <div className='flex-center-column'>
      <h2 >Skills</h2>
      <div className='flex-center-row card-alignments mt-3' >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Skills
