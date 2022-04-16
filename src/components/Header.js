import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Wrapper } from './styles/Header.styled'
import { GiHamburgerMenu } from 'react-icons/gi'
import myPhoto from '../images/myPhoto.jpg'
import { CSSTransition } from 'react-transition-group'
import BurgerMenu from './BurgerMenu'

const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false)

  return (
    <>
      <Wrapper>
        <Container>
          <div className="header">
            <button onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
              <GiHamburgerMenu />
            </button>
            <div className="d-flex align-items-center">
              <p className="header_title">Eldiiar</p>
              <img src={myPhoto} alt="my_photo" />
            </div>
          </div>
        </Container>
        <CSSTransition
          in={showBurgerMenu}
          timeout={400}
          classNames="show"
          unmountOnExit
        >
          <BurgerMenu onShow={setShowBurgerMenu} />
        </CSSTransition>
      </Wrapper>
    </>
  )
}

export default Header
