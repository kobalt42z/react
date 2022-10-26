import React, { Component } from "react";
import logo from "../img/depositphotos_124516442-stock-illustration-vector-logo-currency-exchange.jpg";

class Exchange extends Component {
  currencyToDolar = {
    dolar: 1,
    shekel: 0.29,
    euro: 1.01,
    btc: 20729.4,
  };
  state = {
    leftChoice: 0,
    rightChoice: 0,
    rightShown: "currency",
    leftShown: "currency",
    amount:0,
    result:0,
  };
  setChoice(side, choice ,nameOfChoice) {
    if (side == "left") {
      this.setState({ leftChoice: choice });
      this.setState({leftShown:nameOfChoice})
    }
    if (side == "right") {
      this.setState({ rightChoice: choice });
      this.setState({rightShown:nameOfChoice})
    }
  }

  doExchange(cur1, cur2, amount) {
    // 100 * shekel / euro
    
    console.log((amount * cur1) / cur2);
    console.log(amount);
    let res = ((amount*cur1)/cur2)
    res= Math.floor(res)
    this.setState({result:res})
  }

  render() {
    return (
      <div className="main-ctx">
        {/** logo section  */}
        <div className="container">
          <div className="row justify-content-center">
            <img className="col-5 " src={logo} alt={"logo img"} />
          </div>
        </div>

        {/**exchange section  */}
        <div className="container">
          <div className="row rows-col-3">
            {/**left side */}
            <div className="col">
              <div class="input-group d-flex justify-content-center align-items-end">
                <input 
                readOnly={true}
                  type="number"
                  class="form-control"
                //   aria-label="Text input with segmented dropdown button"
                value={this.state.result}
                 
                />

                <button
                  type="button"
                  class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="m-2">{this.state.leftShown}</span>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <btn
                      class="dropdown-item"
                      href="#"
                      onClick={() =>
                        this.setChoice("left",this.currencyToDolar.dolar,"Dolar")
                      }
                    >
                      Dolar
                    </btn>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() =>
                        this.setChoice("left",this.currencyToDolar.euro,"Euro")
                      }
                    >
                      Euro
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() =>
                        this.setChoice("left",this.currencyToDolar.shekel,"Shekel")
                      }
                    >
                      Shekel
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() =>
                        this.setChoice("left",this.currencyToDolar.btc,"Bitcoin")
                      }
                    >
                      Bitcoin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/**mid */}
            <div className="col d-flex justify-content-center align-items-center">
              <a
                className="btn btn-primary p-2 "
                style={{ width: "100px" }}
                href="#"
                onClick={() =>this.doExchange(this.state.rightChoice,this.state.leftChoice,this.state.amount)}
              >
                <i class="fa-solid fa-arrow-left fa-xl"></i>
              </a>
            </div>

            {/**right side */}
            <div className="col">
              <div class="input-group d-flex justify-content-center align-items-end">
                <input
                  type="number"
                  class="form-control"
                  aria-label="Text input with segmented dropdown button"
                  onChange={(e)=>this.setState({amount:e.target.value}) }
                  
                />

                <button
                  type="button"
                  class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="m-2">{this.state.rightShown}</span>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() =>
                        this.setChoice("right",this.currencyToDolar.dolar,"Dolar")
                      }
                    >
                      Dolar
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => this.setChoice("right",this.currencyToDolar.euro,"Euro")
                      }
                    >
                      Euro
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => this.setChoice("right",this.currencyToDolar.shekel,"Shekel")
                      }
                    >
                      Shekel
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() =>
                        this.setChoice("right",this.currencyToDolar.btc,"Bitcoin")
                      }
                    >
                      Bitcoin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Exchange;
