import './style.scss'


function SkillCard(props) {
  return (
    <div className='skill-card'>
      <img src={props.image} alt={`logo-${props.title}`} />
      <div>
        <h5>{props.title}</h5>
      </div>
    </div>
  )
}

export default SkillCard
