import React from "react";
import { useState } from "react";
import { useRef } from "react";

function ColorsPiker() {
  const choice = useRef(null);
  const [colorChoice, setColorChoice] = useState("");
  return (
    <>
      <div className="row justify-content-center mt-5  ">
        <div className="col-5 justigy-content-center ">
          <h2 style={{ color: `${colorChoice}`,textTransform:"capitalize" }}>
            Your chosen color : {colorChoice}
          </h2>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-5">
          <select
            class="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
            ref={choice}
          >
            <option selected value="">
              Choose a color
            </option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green </option>
          </select>
          <button className="btn btn-success" onClick={() => setColorChoice(choice.current.value)}>
            Choose
          </button>
        </div>
      </div>
    </>
  );
}

export default ColorsPiker;
