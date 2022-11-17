import './block1.css';
import tvVideo from './video.m4v'
import tvImg from './tv.png';

import React from 'react'

function Block1() {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-6">
                <p className="h5">some title here </p>
                <p className="h6">some description here </p>
            </div>
            <div className="col-md-6">
                <video src={tvVideo} autoPlay loops className='tv-background' />
            </div>
        </div>
    </div>
  )
}

export default Block1