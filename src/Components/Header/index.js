import { useState } from 'react';
import './style.scss'
import logoSimples from '../../assets/logo-cb-01.png'
import menuBurguer from '../../assets/menu-icon.svg'

function Header() {
  const [menu, setMenu] = useState(false)


  const toggleMenu = () => {
    setMenu(!menu)
  }


  return (
    <div className='flex-center-row header-style mt-2'>
      <img src={logoSimples} alt="logo" />
      <ul className=''>
        <ul className={`link-box flex-center-row${menu ? " open" : ""}`}>
          <li className='a-style'><a href="">Home</a></li>
          <li className='a-style'><a href="">About me</a></li>
          <li className='a-style'><a href="">Skills</a></li>
          <li className='a-style'><a href="">Projects</a></li>
          <li className='a-style'><a href="">Contact</a></li>
        </ul>
        <li className='menu-style' onClick={toggleMenu}>
          <img src={menuBurguer} alt="" />
        </li>
      </ul>
    </div>
  )
}

export default Header
