import './style.scss'
import illustration from '../../assets/illustration.png'

function AboutMe() {
  return (
    <div className='flex-center-row m-2 container'>
      <div>
        <img className='illustration-pic' src={illustration} alt="avatar-icon" />
      </div>
      <div>
        <h1 className='name'>Camila Boscariol</h1>
        <p className='mt-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium provident iste maiores minima esse, ipsam ea explicabo, optio nostrum accusantium porro, nobis culpa cumque repudiandae obcaecati. Atque, ab at?</p>
        <button className='reset-btn btn-regular mt-2'>Saiba mais</button>
      </div>
    </div>
  )
}

export default AboutMe
