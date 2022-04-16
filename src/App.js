import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GlobalStyles, Wrapper } from './App.styled.js'
import Gallery from './components/Gallery.js'
import Header from './components/Header.js'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <div className="main">
          <Header />
          <Routes>
            <Route path="/" element={<Gallery />} />
          </Routes>
        </div>
      </Wrapper>
    </>
  )
}

export default App
