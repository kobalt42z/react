import React, { useState } from "react";

function Caroussel() {
  let images = ["./img/01.jpg", "./img/02.jpg", "./img/03.jpg"];

  const [current, setCurrent] = useState(1);

  function next() {
    if (current === images.length-1) {
        setCurrent(0)
        }
     else {
        setCurrent(current+1)
      }
    }

    function prev() {
      console.log(current);
        if (current === 0) {
            setCurrent(images.length-1)
            }
         else {
            setCurrent(current-1)
          }
        }

  return (
    <>
      <div className="row justify-content-center">
        <button className="btn btn-light col-3 col-xl-2"
            onClick={()=>prev()}
        >
          <i class="fa-solid fa-chevron-left fa-4x"></i>
        </button>
        
        <img className="col-6 col-xl-4 img-fluid" src={images[current]} alt="" style={{maxHeight:"340px" , maxWidth:"750px" }} />
        <button className="btn btn-light col-3 col-xl-2" 
            onClick={()=>next()}
        >
          <i class="fa-solid fa-chevron-right fa-4x"></i>
        </button>
      </div>
      <div className="row ">
        <div className="col-12 d-flex justify-content-center">
          <div className="m-3 m-xl-0 mt-xl-2 col-1  d-flex justify-content-evenly">
            <i class="fa-solid fa-circle" style={{color:(0===current)?"red":""}}></i>
            <i class="fa-solid fa-circle" style={{color:(1===current)?"red":""}}></i>
            <i class="fa-solid fa-circle" style={{color:(2===current)?"red":""}}></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Caroussel;
