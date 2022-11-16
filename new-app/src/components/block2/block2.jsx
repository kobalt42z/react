import React from 'react'
import PhoneImage from './image.jpg'
import Boxshot from './boxshot.png'
import './block2.css'
function block2() {
    return (
        <div className='container-fluid mb-5 '>
            <div className="row justify-content-center">
               <div className="ms-3 col-12  col-lg-5 col-xl-5 img-box "></div>

                <div className="textright col-12 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-center ">
                    <div className="col-8 d-flex flex-column justify-content-center text-start">
                        <h1 className='pb-3'>Download your shows to watch offline.</h1>
                        <h4>Save your favorites easily and always have something to watch.</h4>
                    </div>
                </div>

            </div>
            <hr class="border border-white border-5 opacity-75"/>
        </div>
    )
}
export default block2
