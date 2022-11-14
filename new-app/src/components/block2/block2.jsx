import React from 'react'
import PhoneImage from './image.jpg'
import './block2.css'
function block2() {
    return (
        <div className='container-fluid '>
            <div className="row">
                <div className="phoneImage col-6 pt-5 mb-2 ">
                 <img className='col-8  ms-5 ps-5 ' src={PhoneImage} alt={"backgroundPhone"}/>
                </div>
                <div className="textright col-6 pt-5 mt-5 d-flex align-items-center ">
                    <div className="col-8 d-flex flex-column justify-content-center text-start">
                      <h1 className='pb-3'>Download your shows to watch offline.</h1>
                      <h4>Save your favorites easily and always have something to watch.</h4>
                      </div>
                </div>

            </div>
        </div>
    )
}
export default block2
