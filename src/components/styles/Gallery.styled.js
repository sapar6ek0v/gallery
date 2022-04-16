import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 50px 0;

  background: white;
  .card-pos {
    position: relative;
  }

  .card {
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
    transition: linear 300ms;
    cursor: pointer;
    margin-bottom: 2rem;

    &:hover {
      filter: brightness(20%);
    }

    img {
      width: 100%;
      height: 267px;
      object-fit: cover;
      border-radius: 5px;
    }

    &:hover + .btn {
      display: block;
    }
  }

  .btn {
    display: none;
    border: none;
    background: transparent;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    font-size: 16px;
    font-style: italic;
    pointer-events: none;
  }
`
