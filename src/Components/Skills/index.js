import './style.scss'
import Card from '../SkillCard/index'
import data from '../../data.json'
import { useEffect } from 'react'

function Skills() {

  useEffect(() => {
    console.log(data)
  }, [])

  const dataSkills = data[0].map(skill => {
    return (
      <Card title={skill.title} image={skill.image} />
    )
  })

  return (
    <div className='flex-center-column'>
      <h2 >Skills</h2>
      <div className='flex-center-row card-alignments mt-3' >
        {dataSkills}
      </div>
    </div>
  )
}

export default Skills
