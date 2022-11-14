import React from 'react'
import { useState } from 'react';
import './header.css'
import { ReactComponent as Logo } from './logo-netflix.svg';

function Header() {
  return (

    <header className='' >
      <div className="dark-alpha container-fluid">


        <nav className="navbar ">
          <div className="container-fluid p-0 m-0">
            <Logo className=" Netflix-Logo-phone Netflix-logo " />

            <div className=" right-navbar d-flex flex-row justify-content-end col-8 col-sm-5 col-md-4 col-lg-3 col-xl-3 col-xxl-2 me-xl-5 ">
              <select className="form-select custom-lang-select bg-dark bg-opacity-25 " aria-label="Default select example border-gray">
                <option selected>English</option>
                <option value="1">Francais</option>
                <option value="2">עברית</option>
                <option value="3">Русский</option>
              </select>
              <button className="btn btn-md btn-danger  col-5 col-md-6 col-lg-7 col-xl-5  ms-2 ms-xxl-4" type="submit">Sign Out</button>
            </div>

          </div>
        </nav>
        <div className="main-header main-header-phone main-header-md row justify-content-center align-items-center">
          <div className="col-12 col-sm-10 col-md-12 col-lg-9 col-xl-7 col-xxl-6 d-flex flex-column " >

            <h1 className='mt-3'>Unlimited movies, TV shows ,and more.</h1>

            <h2 className='my-3'>Watch anywhere. cancel anytime</h2>
            {/* 
            <button className='btn btn-dark mt-4'>Restart Your Memebership <i className="fa-solid fa-chevron-right"></i> </button> */}
            <h4 className='mt-4' >Ready to watch?</h4>
            <h4 className='mb-4'> Enter your email to create or restart your membership.</h4>

           <div className="row justify-content-center">
            <div className="col col-10">
            <div className="input-group mb-4 getStarted-block d-gird ">
              <input type="text" className="form-control  " placeholder="Email Adress" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button className="btn btn-dark " type="button" id="button-addon2">Get Started <i className=" ps-2 fa-solid fa-chevron-right"></i></button>
            </div>
           </div>
            </div>
          </div>
        </div>
      </div>


    </header>

  )
}

export default Header