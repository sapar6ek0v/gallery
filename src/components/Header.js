import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Wrapper } from './styles/Header.styled'
import { GiHamburgerMenu } from 'react-icons/gi'
import myPhoto from '../images/myPhoto.jpg'

const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false)

  return (
    <Wrapper>
      <Container>
        <div className="header">
          <button onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
            <GiHamburgerMenu />
          </button>
          <div className="d-flex align-items-center">
            <p>Eldiiar</p>
            <img src={myPhoto} alt="my_photo" />
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Header
