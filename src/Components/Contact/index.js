import './style.scss'
import github from '../../assets/github-logo.svg'
import email from '../../assets/email.svg'
import linkedin from '../../assets/linkedin-logo.svg'


function Contact() {
  return (
    <div>
      <h2 className='flex-center-column mt-3'>Contact</h2>
      <div className='contact flex-center-row mt-3' >
        <a href="https://github.com/cboscariol" target="_blank" className='reset-a '>
          <img src={github} alt="github-link" />
        </a>
        <a href="https://www.linkedin.com/in/camila-boscariol/" target="_blank" className='reset-a '>
          <img src={linkedin} alt="linkedin-link" />
        </a>
        <a href="mailto:caamila.boscariol@gmail.com" target="_blank" className='reset-a '>
          <img src={email} alt="email" />
        </a>
      </div>
    </div>
  )
}

export default Contact
