import React from "react";

function Investment() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row row--relative">
            <div className="col-12 col-lg-6">
              <div className="invest">
                <h2 className="invest__title">For Investors</h2>

                <ul className="invest__list">
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

                <a href="invest.html" className="invest__link">
                  Arbitrage pools
                </a>

                <span className="block-icon block-icon--orange">
                  <i className="ti ti-database-dollar"></i>
                </span>
                <span className="screw screw--lines-bl"></span>
                <span className="screw screw--lines-br"></span>
                <span className="screw screw--lines-tr"></span>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="invest">
                <h2 className="invest__title">Centure Token</h2>

                <div className="invest__rate-wrap">
                  <div className="invest__rate">
                    <span>Current course</span>
                    <p>1 Centure = $0.791</p>
                  </div>

                  <div className="invest__graph">
                    <img src="/assets/img/graph/graph2.svg" alt="" />
                  </div>
                </div>

                <div className="invest__rate-wrap">
                  <div className="invest__rate">
                    <span>Week</span>
                    <p className="green">
                      +0.19% <small>[0.84]</small>
                    </p>
                  </div>

                  <div className="invest__graph">
                    <img src="/assets/img/graph/graph1.svg" alt="" />
                  </div>
                </div>

                <a href="token.html" className="invest__link">
                  More about token
                </a>

                <span className="block-icon block-icon--blue">
                  <i className="ti ti-brand-coinbase"></i>
                </span>
                <span className="screw screw--lines-bl"></span>
                <span className="screw screw--lines-br"></span>
                <span className="screw screw--lines-tr"></span>
              </div>
            </div>

            <div
              className="section__canvas section__canvas--first"
              id="canvas"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Investment;
