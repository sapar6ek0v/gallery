import styled from 'styled-components'

export const Wrapper = styled.header`
  background: #f4f5f7;
  position: sticky;
  top: 0;
  z-index: 11;

  .header {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 36px;
      object-fit: contain;
    }

    &_title {
      margin: 0 10px 0 0;
      color: #172b4d;
    }
  }

  .show-enter {
    opacity: 0;
  }
  .show-enter-active {
    opacity: 1;
    transition: all 400ms linear;
  }
  .show-exit {
    opacity: 1;
  }
  .show-exit-active {
    opacity: 0;
    transition: all 400ms linear;
  }
`
