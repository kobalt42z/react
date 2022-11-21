import React from 'react'
import './block3.css'
import Leftside from './leftSide.png'
function block4() {
  return (
    <div className="container-fluid r">
      <div className="row justify-content-center">
        <div className="leftside col-12 col-lg-6">
          <img className=' img-fluid' src={Leftside} alt={"PhotoOfLeftSide"} />
        </div>
        <div className='col-12 d-flex flex-column justify-content-center col-lg-6 text-block'>
        
            <h1>Create profiles for kids.</h1>
            <h4>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h4>
        
        </div>
      </div>
    </div>
  )
}

export default block4