import './style.scss'

function Home() {
  return (
    <div className='flex-center-row m-2 container'>
      <div>
        <h1 >Front-end developer Jr.</h1>
        <p className='mt-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium provident iste maiores minima esse, ipsam ea explicabo, optio nostrum accusantium porro, nobis culpa cumque repudiandae obcaecati. Atque, ab at?</p>
        <button className='reset-btn btn-regular mt-2'>Saiba mais</button>
      </div>
      <div>
        <img className='avatar-profile-pic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsA93aGT9wAKXQyw56MS72nrzK7Ivu1bwt0w&usqp=CAU" alt="avatar-icon" />
      </div>
    </div>
  )
}

export default Home
