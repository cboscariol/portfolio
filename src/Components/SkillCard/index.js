import './style.scss'
import react from '../../assets/react.png'

function SkillCard() {
  return (
    <div className='skill-card'>
      <img src={react} alt="..." />
      <div>
        <h5>React</h5>
      </div>
    </div>
  )
}

export default SkillCard
