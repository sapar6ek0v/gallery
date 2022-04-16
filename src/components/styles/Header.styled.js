import styled from 'styled-components'

export const Wrapper = styled.header`
  background: #f4f5f7;

  .header {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 36px;
      object-fit: contain;
    }

    p {
      margin: 0 10px 0 0;
    }
  }

  button {
    background: #fafef6;
    color: #172b4d;
    border-radius: 5px;
    padding: 5px 10px 8px;
    font-size: 18px;
    border: 1px solid #172b4d;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
    outline: 1px solid rgba(255, 255, 255, 0.5);
    outline-offset: 0;
    text-shadow: none;
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

    &:hover {
      border: 1px solid;
      box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
        0 0 20px rgba(255, 255, 255, 0.2);
      outline: 1px rgba(255, 255, 255, 0);
      outline-offset: 15px;
      text-shadow: 1px 1px 2px #427388;
      color: #fafef6;
      background: #172b4d;
    }
  }
`
