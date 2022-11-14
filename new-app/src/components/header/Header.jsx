import React from 'react'
import { useState } from 'react';
import './header.css'
import { ReactComponent as Logo } from './logo-netflix.svg';

function Header() {
  return (

    <header >
      <div className="dark-alpha">


        <nav class="navbar ">
          <div class="container-fluid">
            <Logo className=" Netflix-Logo-phone Netflix-logo " />

            <div className=" right-navbar d-flex flex-row col-6 col-md-3 col-lg-2 col-xl-2 col-xxl-2 ">
              <select class="form-select custom-lang-select bg-dark bg-opacity-25 " aria-label="Default select example border-gray">
                <option selected>English</option>
                <option value="1">Francais</option>
                <option value="2">עברית</option>
                <option value="3">Русский</option>
              </select>
              <button class="btn btn-md btn-danger  col-4 ms-3 ms-xxl-4" type="submit">Sign Out</button>
            </div>

          </div>
        </nav>
        <div className="main-header row justify-content-center align-items-center">
          <div className="col-xxl-5  " >
            <h3>Welcom back!</h3>
            <h1 className='mt-3'>Unlimited movies, TV shows ,and more.</h1>

            <h3 className='mt-3'>Watch anywhere. cancel anytime</h3>

            <button className='btn btn-dark mt-4'>Restart Your Memebership <i class="fa-solid fa-chevron-right"></i> </button>
          </div>
        </div>
      </div>


    </header>

  )
}

export default Header