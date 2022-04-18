import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './styles/BurgerMenu.styled'
import myPhoto from '../images/myPhoto.jpg'
import { SiGmail } from 'react-icons/si'
import { FaLink } from 'react-icons/fa'

const BurgerMenu = ({ onShow }) => {
  return (
    <Wrapper onClick={() => onShow(false)}>
      <div onClick={(e) => e.stopPropagation()} className="burger-menu">
        <div className="mb-5">
          <Link to="/" className="burger-menu_route">
            <FaLink />
            <span>Галерея</span>
          </Link>
          <Link to="/about_me" className="burger-menu_route">
            <FaLink />
            <span>Обо мне</span>
          </Link>
        </div>
        <hr />
        <img src={myPhoto} alt="my-photo" className="burger-menu_img" />
        <h4>Eldiiar</h4>
        <a
          href="mailto:eldiiarsaparbekov03@gmail.com"
          className="burger-menu_link"
        >
          <SiGmail />
          <span>eldiiarsaparbekov03@gmail.com</span>
        </a>
      </div>
    </Wrapper>
  )
}

export default BurgerMenu
