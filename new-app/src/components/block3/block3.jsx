import React from 'react'
import './block3.css'
import Leftside from './leftSide.png'
function block4() {
  return (
    <div className="container-fluid d-flex justify-content-center">
        <div className="leftside col-5">
            <img className='ps-5 ms-5 col-10' src={Leftside} alt={"PhotoOfLeftSide"} />
        </div>
        <div className='rightside col-5 d-flex align-items-center'>
        <div className=" col-10 d-flex flex-column justify-content-center text-start">
           <h1>Create profiles for kids.</h1>
           <h4>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h4>
        </div>
        </div>
    </div>
  )
}

export default block4