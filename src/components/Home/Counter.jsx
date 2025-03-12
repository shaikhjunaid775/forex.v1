import React from "react";

function Counter() {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="stats">
                <span className="stats__value">1839</span>
                <p className="stats__name">Days on the market</p>

                <span className="stats__dodger stats__dodger--left stats__dodger--purple"></span>
                <span className="stats__dodger stats__dodger--right stats__dodger--purple"></span>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-xl-3">
              <div className="stats">
                <span className="stats__value">5812</span>
                <p className="stats__name">Members</p>

                <span className="stats__dodger stats__dodger--left stats__dodger--orange"></span>
                <span className="stats__dodger stats__dodger--right stats__dodger--orange"></span>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-xl-3">
              <div className="stats">
                <span className="stats__value">$374 103</span>
                <p className="stats__name">Arbitrage pools</p>

                <span className="stats__dodger stats__dodger--left stats__dodger--green"></span>
                <span className="stats__dodger stats__dodger--right stats__dodger--green"></span>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-xl-3">
              <div className="stats">
                <span className="stats__value">$100 812</span>
                <p className="stats__name">Total paid</p>

                <span className="stats__dodger stats__dodger--left stats__dodger--blue"></span>
                <span className="stats__dodger stats__dodger--right stats__dodger--blue"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
