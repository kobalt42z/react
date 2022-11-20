import './block1.css';
import tvVideo from './video.m4v'
import tvImg from './tv.png';

import React from 'react'

function Block1() {
  return (
    <div className="container-fluid my-5 position">
      <div className="row block1 justify-content-center">
      <div className="textright col-12 col-lg- col-xl-5 col-xxl-5 d-flex justify-content-center position-relative py-5">
                    <div className="col-8 d-flex flex-column justify-content-center
                    align-items-end text-center">
                        <h1 className='pb-3'>Download your shows to watch offline.</h1>
                        <h4>Save your favorites easily and always have something to watch.</h4>
                    </div>
                </div>
        <div className="col-1 col-md-6 d-flex justify-content-center  ">
          <div className="tv-background   d-flex justify-content-center position-relative align-items-center ">
            <img src={tvImg} alt=""  className='position-absolute img-fluid '/>
            <video src={tvVideo} autoPlay loop muted className='tv-video p-5 ' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Block1