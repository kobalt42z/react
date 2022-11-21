import './block1.css';
import tvVideo from './video.m4v'
import tvImg from './tv.png';

import React from 'react'

function Block1() {
  return (
    <div className="container-fluid my-5 position">
      <div className="row block1 justify-content-center">
      <div className=" col-12 col- col-lg-6 col-xl-5 col-xxl-5 d-flex justify-content-center position-relative py-5">
                    <div className=" d-flex flex-column justify-content-center
                    align-items-center text-center text-block">
                        <h1 className='pb-3'>Enjoy on your TV.</h1>
                        <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
                    </div>
                </div>
        <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center ">
          <div className="tv-background   d-flex justify-content-center position-relative align-items-center ">
            <img src={tvImg} alt=""  className='position-absolute img-fluid '/>
            <video src={tvVideo} autoPlay loop muted className='tv-video  img-fluid p-4' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Block1