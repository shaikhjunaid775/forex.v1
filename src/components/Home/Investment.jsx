import React from "react";

function Investment() {
  return (
    <>
      <section class="section">
        <div class="container">
          <div class="row row--relative">
            <div class="col-12 col-lg-6">
              <div class="invest">
                <h2 class="invest__title">For Investors</h2>

                <ul class="invest__list">
                  <li>
                    - <b>6 types</b> of arbitrage pools with monthly <b>10%</b>{" "}
                    yield and the possibility to reinvest on more favorable
                    terms;
                  </li>
                  <li>
                    - <b>Arbitrage nodes</b> to boost your pool;
                  </li>
                  <li>- Other rewards and bonuses;</li>
                </ul>

                <a href="invest.html" class="invest__link">
                  Arbitrage pools
                </a>

                <span class="block-icon block-icon--orange">
                  <i class="ti ti-database-dollar"></i>
                </span>
                <span class="screw screw--lines-bl"></span>
                <span class="screw screw--lines-br"></span>
                <span class="screw screw--lines-tr"></span>
              </div>
            </div>

            <div class="col-12 col-lg-6">
              <div class="invest">
                <h2 class="invest__title">Centure Token</h2>

                <div class="invest__rate-wrap">
                  <div class="invest__rate">
                    <span>Current course</span>
                    <p>1 Centure = $0.791</p>
                  </div>

                  <div class="invest__graph">
                    <img src="/assets/img/graph/graph2.svg" alt="" />
                  </div>
                </div>

                <div class="invest__rate-wrap">
                  <div class="invest__rate">
                    <span>Week</span>
                    <p class="green">
                      +0.19% <small>[0.84]</small>
                    </p>
                  </div>

                  <div class="invest__graph">
                    <img src="/assets/img/graph/graph1.svg" alt="" />
                  </div>
                </div>

                <a href="token.html" class="invest__link">
                  More about token
                </a>

                <span class="block-icon block-icon--blue">
                  <i class="ti ti-brand-coinbase"></i>
                </span>
                <span class="screw screw--lines-bl"></span>
                <span class="screw screw--lines-br"></span>
                <span class="screw screw--lines-tr"></span>
              </div>
            </div>

            <div
              class="section__canvas section__canvas--first"
              id="canvas"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Investment;
