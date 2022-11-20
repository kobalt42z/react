import React from 'react'
import { useState } from 'react';
import './header.scss'
import { ReactComponent as Logo } from './logo-netflix.svg';

function Header() {
  return (
    
      <header className='' >
        <div className="dark-alpha bg-opacity-25">
        <div className=" container-fluid">




          <div className="row py-4 align-items-center ">

            <div className='col d-flex flex-start'><Logo className="netflix-logo " /></div>



            <select className="form-select form-select-sm  lang-select mx-1 " >
              <option selected>English</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <button className='btn sign-in-btn me-2'>Sign In</button>
          </div>







          <div className="row text-block" >

            <h1 className='mt-3'>Unlimited movies, TV shows ,and more.</h1>

            <h2 className='my-3'>Watch anywhere. cancel anytime</h2>
            {/* 
            <button className='btn btn-dark mt-4'>Restart Your Memebership <i className="fa-solid fa-chevron-right"></i> </button> */}
            <h4 className='mt-4' >Ready to watch?</h4>
            <h4 className='mb-4'> Enter your email to create or restart your membership.</h4>
          </div>


          <div className="row justify-content-center">
            <div className="input-group
                get-started-bar my-5">
              <input type="text" className="form-control" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button className="btn btn-outline-secondary" type="button" id="button-addon2">Get started <i className=" ps-2 fa-solid fa-chevron-right"></i></button>
            </div>
          </div>

        </div>



        </div>
      </header>
    

  )
}

export default Header