import React from 'react'
import myImage from '../data/hero.json'
const Home = () => {
  return (
    <>
      <div className="container home">
        <div className="left">
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <a href="#" className="btn btn-outline-warning">Download Resume</a>
        </div>
        <div className="right">
          <div className="img">
            <img src={`assets/${myImage.imgSrc}`} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
