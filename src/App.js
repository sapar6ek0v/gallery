import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GlobalStyles, Wrapper } from './App.styled.js'
import AboutMe from './components/AboutMe.js'
import Gallery from './components/Gallery.js'
import Header from './components/Header.js'
import PictureDetails from './components/PictureDetails.js'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <div className="main">
          <Header />
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/about_me" element={<AboutMe />} />
            <Route path="/picture_details" element={<PictureDetails />} />
          </Routes>
        </div>
      </Wrapper>
    </>
  )
}

export default App
