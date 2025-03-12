import React from "react";

function Features() {
  return (
    <>
      <section class="section">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <div class="section__title">
                <h2>Our features</h2>
                <p>
                  Whether you're a beginner or an experienced trader, our
                  platform empowers you to make informed decisions and your
                  trading success.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-lg-4">
              <div class="feature">
                <h3 class="feature__title">Safety</h3>
                <p class="feature__text">
                  We do not have access to your personal data and cannot
                  withdraw funds
                </p>

                <span class="block-icon block-icon--orange">
                  <i class="ti ti-shield-dollar"></i>
                </span>
                <span class="screw screw--bl"></span>
                <span class="screw screw--tr"></span>
                <span class="screw screw--big-br"></span>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="feature">
                <h3 class="feature__title">Automatization</h3>
                <p class="feature__text">
                  Automatic arbitrage calculations and deal closing
                </p>

                <span class="block-icon block-icon--green">
                  <i class="ti ti-24-hours"></i>
                </span>
                <span class="screw screw--bl"></span>
                <span class="screw screw--tr"></span>
                <span class="screw screw--big-br"></span>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="feature">
                <h3 class="feature__title">Analytics</h3>
                <p class="feature__text">
                  The robot shows you how your trades are performing in real
                  time
                </p>

                <span class="block-icon block-icon--blue">
                  <i class="ti ti-chart-histogram"></i>
                </span>
                <span class="screw screw--bl"></span>
                <span class="screw screw--tr"></span>
                <span class="screw screw--big-br"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
