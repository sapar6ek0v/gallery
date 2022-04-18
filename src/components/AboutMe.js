import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Wrapper } from './styles/AboutMe.styled'
import myPhoto from '../images/myPhoto.jpg'
import Loader from './Loader'

const AboutMe = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false)
      }, 5000)
    }
  }, [loading])

  if (loading) return <Loader />

  return (
    <Container>
      <Wrapper>
        <div className="about_container">
          <img src={myPhoto} className="about_profile-img" alt="my-photo" />
          <h1>Eldiiar</h1>
          <div className="about_description">
            Меня зовут Эльдияр и я Frontend Developer. Программирование мне
            нравилось еще со школы. Да, у меня мало опыта, но я быстро учусь, и
            я думаю, что это один из моих основных ключевых навыков. За свой
            небольшой опыт работы я многому научился и многого добился, были как
            интересные проекты, так и не очень. Я надеюсь, что смогу работать с
            вами над крутыми проектами и использовать все, что знаю, а также
            узнавать новое. <br />
            Мой основной стек — это React, Redux, сss-in-js, TS, node.js,
            Mongo.DB, Express.js и недавно начал изучать PostgreSql. <br />C
            уважением Эльдияр!
          </div>
          <div class="about_social">
            <a href="https://github.com/sapar6ek0v" target="_blank">
              GitHub
            </a>
            <a
              href="https://hh.ru/resume/2fd18f0aff099ef8240039ed1f587747797774"
              target="_blank"
            >
              CV
            </a>
            <a
              href="https://www.linkedin.com/in/eldiiar-saparbekov-bb162822b/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <button>
            <a
              href="mailto:eldiiarsaparbekov03@gmail.com"
              className="burger-menu_link"
            >
              Choose Me
            </a>
          </button>
        </div>
      </Wrapper>
    </Container>
  )
}

export default AboutMe
