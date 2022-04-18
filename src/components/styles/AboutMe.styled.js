import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 50px 0;

  .about {
    &_container {
      height: 100%;
      width: 400px;
      padding: 20px;
      border-radius: 5px;
      background: #fffffb;
      position: relative;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
      margin: 0 auto;
    }
    &_profile-img {
      height: 100px;
      width: 100px;
      object-fit: cover;
      position: absolute;
      top: -25px;
      left: -25px;
      border-radius: 50%;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    }

    &_description {
      margin-bottom: 20px;
    }

    &_social {
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        text-align: center;
        border: solid 2px #8bc34a;
        padding: 5px 10px;
        border-radius: 5px;
        transition: linear 0.4s;
        color: rgba(0, 0, 0, 0.8);
        text-decoration: none;

        &:hover {
          background: #8bc34a;
          color: white;
          cursor: pointer;
        }
      }
    }
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #4caf50;
  }

  button {
    width: 80%;
    height: 80px;
    font-size: 2rem;
    margin: 30px 10% 0 10%;
    border: none;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    background: linear-gradient(45deg, #8bc34a, #4caf50, #4caf50, #8bc34a);
    background-size: 300% 300%;
    outline: none;
    transition: all 200ms ease-in-out;
    a {
      color: #fffffb;
      text-decoration: none;
    }
    &:hover {
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
      transform: translateY(2px);
      animation: gradientBG 1.5s ease-in-out forwards;
      cursor: pointer;
    }
    &:active {
      box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
      transform: translateY(4px);
    }
  }
  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`
