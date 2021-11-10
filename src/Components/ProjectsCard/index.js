import './style.scss'


function SkillCard(props) {
  return (
    <div className='project-card'>
      <a href={props.url} target='_blank'>
        <img src={props.image} alt={`project-${props.title}`} />
        <h5>{props.title}</h5>
      </a>
      <div>
      </div>
    </div>
  )
}

export default SkillCard
