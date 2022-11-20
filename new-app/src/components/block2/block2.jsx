import React from 'react'
import PhoneImage from './image.jpg'
import Boxshot from './boxshot.png'
import animation from './load-icon.gif'
import './block2.css'
function block2() {
    return (
        <div className=' my-5 '>
            <div className="row justify-content-end mx-0 py-5">
               <div className="   col-lg-5 col-xl-5 img-box d-flex align-items-end  justify-content-center pb- ">
                <div className=" 
                w-50
                animation-block d-flex align-items-center justify-content-evenly ">
                    <img src={Boxshot} alt="stranger things mini img" />
                    <div className="text-block-animation text-start ms-2">
                        <h5 className='h5'> Stranger Things</h5>
                        <h6 className='text-primary'>Downloading...</h6>
                    </div>
                    <img src={animation} alt="" />
                </div>
               </div>

                <div className="textright col-12 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-start ">
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
