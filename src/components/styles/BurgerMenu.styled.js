import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;

  .burger-menu {
    position: fixed;
    top: 88px;
    left: 0;
    width: 25%;
    background: #f4f5f7;
    padding: 30px 40px;
    border-radius: 0 0 10px 10px;
    text-align: center;

    &_route {
      color: #172b4d;
      display: block;
      margin-bottom: 15px;
      text-decoration: none;
      transition: linear 400ms;
      display: flex;
      align-items: center;
      span {
        display: inline-block;
        margin-left: 8px;
      }
      &:hover {
        color: #1a93f5;
      }
    }

    &_img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 10px;
    }

    h4 {
      font-weight: 400;
      font-style: italic;
      color: #172b4d;
      margin-bottom: 10px;
    }

    &_link {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #172b4d;

      span {
        display: inline-block;
        margin-left: 8px;
        transition: ease-in 0.4s;
        &:hover {
          color: #1a93f5;
        }
      }
    }
  }
`
