import React from "react";

function Counter() {
  return (
    <>
      <div class="section">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-6 col-xl-3">
              <div class="stats">
                <span class="stats__value">1839</span>
                <p class="stats__name">Days on the market</p>

                <span class="stats__dodger stats__dodger--left stats__dodger--purple"></span>
                <span class="stats__dodger stats__dodger--right stats__dodger--purple"></span>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-xl-3">
              <div class="stats">
                <span class="stats__value">5812</span>
                <p class="stats__name">Members</p>

                <span class="stats__dodger stats__dodger--left stats__dodger--orange"></span>
                <span class="stats__dodger stats__dodger--right stats__dodger--orange"></span>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-xl-3">
              <div class="stats">
                <span class="stats__value">$374 103</span>
                <p class="stats__name">Arbitrage pools</p>

                <span class="stats__dodger stats__dodger--left stats__dodger--green"></span>
                <span class="stats__dodger stats__dodger--right stats__dodger--green"></span>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-xl-3">
              <div class="stats">
                <span class="stats__value">$100 812</span>
                <p class="stats__name">Total paid</p>

                <span class="stats__dodger stats__dodger--left stats__dodger--blue"></span>
                <span class="stats__dodger stats__dodger--right stats__dodger--blue"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
