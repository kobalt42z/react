import React from 'react'
import PhoneImage from './image.jpg'
import Boxshot from './boxshot.png'
import animation from './load-icon.gif'
import './block2.css'
function block2() {
    return (
        <div className=' my-5 '>
            <div className="row justify-content-center mx-0 py-5">

                <div className="phone-image col-12  col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3 me-lg-4 ">
                    <div className="img-box img-fluid d-flex  flex-column justify-content-end">  <div className=" 
                animation-block
                 
                 d-flex align-items-center justify-content-evenly ">
                        <img src={Boxshot} alt="stranger things mini img" className='img-fluid' />
                        <div className="text-block-animation text-start ms-2 ">
                            <h5 className='h5'> Stranger Things</h5>
                            <h6 className='text-primary'>Downloading...</h6>
                        </div>
                        <img src={animation} alt="" />
                    </div></div>

                </div>

                <div className="col-12 col-md-10 col-lg-5 col-xl-5 col-xxl-5 d-flex justify-content-center ">
                    <div className=" d-flex flex-column justify-content-center text-center text-block">
                        <h1 className='pb-3'>Download your shows to watch offline.</h1>
                        <h2>Save your favorites easily and always have something to watch.</h2>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default block2
