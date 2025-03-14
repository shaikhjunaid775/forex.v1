import React from "react";

function About() {
  return (
    <>
      <div class="section section--head">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section__title">
                <h1>About Centure</h1>
                <p>
                  Centure is an affordable and successful crypto investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section--pb">
        <div class="container">
          <div class="row row--relative">
            <div class="col-12">
              <div class="about">
                <h2 class="about__title">What is Centure?</h2>

                <p class="about__text">
                  Centure is an advanced ecosystem of innovative financial
                  products and services that provides clients with broad access
                  to high-performance investment tools in the cryptocurrency
                  market.
                </p>

                <p class="about__text">
                  Centure has been developing a forward-thinking, reliable,
                  intuitive investment platform since 2023, and offers everyone,
                  regardless of their initial background, a first-hand
                  experience of cryptocurrency investing in a safe,
                  professional-led environment.
                </p>

                <span class="block-icon block-icon--purple">
                  <i class="ti ti-binary"></i>
                </span>
                <span class="screw screw--lines-bl"></span>
                <span class="screw screw--lines-br"></span>
                <span class="screw screw--lines-tr"></span>
              </div>
            </div>

            <div
              class="section__canvas section__canvas--page section__canvas--first"
              id="canvas"
            ></div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-6 col-xl-3">
              <div class="stats">
                <span class="stats__value">1839</span>
                <p class="stats__name">Days on the market</p>\
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
      <section class="section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="roadmap">
                <h2 class="roadmap__title">Roadmap</h2>

                <div class="roadmap__carousel splide splide--roadmap">
                  <div class="splide__arrows">
                    <button
                      class="splide__arrow splide__arrow--prev"
                      type="button"
                    >
                      <i class="ti ti-arrow-left"></i>
                    </button>
                    <button
                      class="splide__arrow splide__arrow--next"
                      type="button"
                    >
                      <i class="ti ti-arrow-right"></i>
                    </button>
                  </div>

                  <div class="splide__track">
                    <ul class="splide__list">
                      <li class="splide__slide">
                        <div class="roadmap__block roadmap__block--active">
                          <h3 class="roadmap__block-title">2023 Q4</h3>
                          <ul class="roadmap__block-list">
                            <li>
                              Develop the website's backend infrastructure and
                              set up secure trading APIs.
                            </li>
                            <li>
                              Design the user interface, ensuring ease of use
                              and seamless navigation.
                            </li>
                            <li>
                              Create educational content about cryptocurrency
                              arbitrage trading for the website's Knowledge
                              Center.
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li class="splide__slide">
                        <div class="roadmap__block roadmap__block--active">
                          <h3 class="roadmap__block-title">2024 Q1</h3>
                          <ul class="roadmap__block-list">
                            <li>
                              Launch the beta version of the website for a
                              limited user group to gather feedback.
                            </li>
                            <li>
                              Test and optimize the trading algorithms to ensure
                              accuracy and efficiency.
                            </li>
                            <li>
                              Implement robust security measures, including
                              encryption and two-factor authentication.
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li class="splide__slide">
                        <div class="roadmap__block">
                          <h3 class="roadmap__block-title">2024 Q2</h3>
                          <ul class="roadmap__block-list">
                            <li>
                              Launch the full version of the website to the
                              public.
                            </li>
                            <li>
                              Implement a comprehensive reporting and analytics
                              system for users to track their trading
                              performance.
                            </li>
                            <li>
                              Collaborate with industry experts to provide
                              regular insights and trading tips.
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li class="splide__slide">
                        <div class="roadmap__block">
                          <h3 class="roadmap__block-title">2024 Q3</h3>
                          <ul class="roadmap__block-list">
                            <li>
                              Develop advanced trading features, such as
                              arbitrage alerts and strategies.
                            </li>
                            <li>
                              Introduce a subscription-based model for premium
                              users, offering exclusive features and resources.
                            </li>
                            <li>
                              Expand educational resources with webinars and
                              tutorials.
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li class="splide__slide">
                        <div class="roadmap__block">
                          <h3 class="roadmap__block-title">2024 Q4</h3>
                          <ul class="roadmap__block-list">
                            <li>
                              Launch mobile apps for iOS and Android platforms
                              to facilitate trading on the go.
                            </li>
                            <li>
                              Continuously update trading algorithms based on
                              market trends and user feedback.
                            </li>
                            <li>
                              Collaborate with regulatory experts to ensure
                              compliance with evolving cryptocurrency
                              regulations.
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <span class="block-icon block-icon--blue">
                  <i class="ti ti-north-star"></i>
                </span>
                <span class="screw screw--lines-bl"></span>
                <span class="screw screw--lines-br"></span>
                <span class="screw screw--lines-tr"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="row row--relative">
            <div class="col-12">
              <div class="company">
                <h2 class="company__title">Company registration</h2>

                <div class="row">
                  <div class="col-12 col-xl-7">
                    <p class="company__text">
                      Integrity, reliability, transparency, flexibility and
                      communication should be the core values of any company
                      that works in the field of investment attraction. Centure
                      adheres to absolutely all of these values so that our
                      clients can have confidence and trust in us.
                    </p>
                    <p class="company__text">
                      License No. <b>8597366</b>
                    </p>
                  </div>

                  <div class="col-12 col-xl-4 offset-xl-1">
                    <p class="company__subtitle">Legal address:</p>
                    <p class="company__text">
                      99 Chancery Street, <br />
                      Auckland Central, <br />
                      Auckland, 1010, New Zealand
                    </p>
                  </div>
                </div>
                <span class="block-icon block-icon--orange">
                  <i class="ti ti-certificate-2"></i>
                </span>
                <span class="screw screw--lines-bl"></span>
                <span class="screw screw--lines-br"></span>
                <span class="screw screw--lines-tr"></span>
              </div>
            </div>

            <div
              class="section__canvas section__canvas--second"
              id="canvas2"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
