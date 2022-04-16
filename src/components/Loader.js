import React from 'react'
import { Wrapper } from './styles/Loader.styled'
import { Bars } from 'react-loader-spinner'

const Loader = () => {
  return (
    <Wrapper>
      <Bars
        height="100"
        width="100"
        color="grey"
        ariaLabel="loading-indicator"
      />
    </Wrapper>
  )
}

export default Loader
