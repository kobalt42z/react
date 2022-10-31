import React from "react";
import { useState } from "react";




function Counter() {
  const [value, setValue] = useState(0)

  
    function plus() {
      if (value>=5) {
        setValue(0)
      } else {
        setValue(value+1)
      }
    }

    function minus() {
      if (value<=0) {
        setValue(5)
      } else {
        setValue(value-1)
      }
    }

  return (
    <div className="container main-ctx">
      <div class="row justify-content-center m-5">
        <div className="col-4 d-flex justify-content">
          <button className="btn btn-primary col-4 " onClick={()=>plus()}>+</button>
          <h2 className="text-info text-center col-4"  >
            {value}
          </h2>
          <button className="btn btn-primary col-4" onClick={()=>minus()}>-</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
