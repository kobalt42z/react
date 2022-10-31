import React from "react";
import { useState } from "react";


function Counter() {
    const [value, setValue] = useState()
  return (
    <div className="container main-ctx">
      <div class="row">
        <div className="col-12">
          <button className="btn btn-primary" onClick={()=>setValue(value+1)}>+</button>
          <h2 className="text-info" >
            {value}
          </h2>
          <button className="btn btn-primary" onClick={()=>setValue(value+1)}>-</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
