import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 50px 0;

  .card {
    &_details {
      width: 500px;
      display: flex;
      justify-content: center;
      margin: 0 auto;
    }

    &_btn {
      position: absolute;
      left: 80px;
    }

    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
    border-radius: 1em;
    background: #ece9e6;
    background: linear-gradient(to right, #ffffff, #ece9e6);
    margin: 0 auto;

    &_img {
      max-width: 100%;
      display: block;
      object-fit: cover;
    }

    &_link {
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        transition: linear 0.4s;
        display: flex;
        align-items: center;
        span {
          padding-right: 5px;
        }
        &:hover {
          color: #172b4d;
        }
      }
    }

    &_body {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      h4 {
        font-size: 1.5rem;
        text-transform: capitalize;
      }

      p {
        display: flex;
        align-items: center;

        span {
          display: inline-block;
          padding-left: 10px;
        }
      }
    }

    &_footer {
      display: flex;
      padding: 1rem;
      margin-top: auto;
    }
  }

  .tag {
    align-self: flex-start;
    padding: 0.25em 0.75em;
    border-radius: 1em;
    font-size: 0.75rem;
  }

  .tag + .tag {
    margin-left: 0.5em;
  }

  .tag-blue {
    background: #56ccf2;
    background: linear-gradient(to bottom, #2f80ed, #56ccf2);
    color: #fafafa;
  }

  .user {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    &_image {
      border-radius: 50%;
      width: 36px;
      height: 36px;
      object-fit: cover;
    }
    h5 {
      color: #666;
      margin-bottom: 0;
    }
  }

  @media (min-width: 480px) {
    padding: 90px 0;
    .card {
      &_btn {
        top: 104px;
        left: 18px;
      }
      &_details {
        width: 400px;
      }
    }
  }

  @media (min-width: 576px) {
    padding: 90px 0;
    .card {
      &_btn {
        top: 104px;
        left: 48px;
      }
    }
  }

  @media (min-width: 768px) {
    padding: 70px 0;

    .card {
      &_btn {
        top: 104px;
        left: 80px;
      }

      &_details {
        width: 700px;
      }
    }
  }
`

export const Button = styled.button`
  background: #fafef6;
  color: #172b4d;
  border-radius: 5px;
  padding: ${({ pd }) => pd};
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
`
