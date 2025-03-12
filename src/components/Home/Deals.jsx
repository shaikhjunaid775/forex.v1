import React from "react";

function Deals() {
  // Sample trading data
  const dealsData = [
    {
      pair: "BNB/USDT",
      exchangefrom: "/assets/img/exchanges/binance.png",
      exchangefromName: "Binance",
      exchangeto: "/assets/img/exchanges/bitget.png",
      exchangetoName: "Bitget",
      date: "15.11.23 01:09",
      buyingPrice: 300,
      sellingPrice: 310,
      dealAmount: 1000,
      profit: 10,
      spread: 3.33
    },
    {
        pair: "SOL/USDT",
        exchangefrom: "/assets/img/exchanges/bitfinex.png",
        exchangefromName: "Bitfinex",
        exchangeto: "/assets/img/exchanges/kraken.png",
        exchangetoName: "Kraken",
        date: "15.11.23 01:01",
        buyingPrice: 333.32,
        sellingPrice: 333.7,
        dealAmount: 8204,
        profit: 9.35,
        spread: 0.11
    },
    {
        pair: "ALGO/USDT",
        exchangefrom: "/assets/img/exchanges/bithumb.png",
        exchangefromName: "Bithumb",
        exchangeto: "/assets/img/exchanges/coinbase.png",
        exchangetoName: "Coinbase",
        date: "15.11.23 00:57",
        buyingPrice: 0.2181,
        sellingPrice: 0.21847,
        dealAmount: 8040,
        profit: 13.64,
        spread: 0.17
    },
    {
        pair: "BNB/USDT",
        exchangefrom: "/assets/img/exchanges/coincheck.png",
        exchangefromName: "Coincheck",
        exchangeto: "/assets/img/exchanges/gate.png",
        exchangetoName: "Gate",
        date: "15.11.23 00:51",
        buyingPrice: 1741.23,
        sellingPrice: 1741.32,
        dealAmount: 7599,
        profit: 9.48,
        spread: 0.12
    },
    {
        pair: "MATIC/USDT",
        exchangefrom: "/assets/img/exchanges/kucoin.png",
        exchangefromName: "Kucoin",
        exchangeto: "/assets/img/exchanges/okx.png",
        exchangetoName: "OKX",
        date: "15.11.23 00:48",
        buyingPrice: 2.1,
        sellingPrice: 2.32,
        dealAmount: 999,
        profit: 7.24,
        spread: 0.28
    },
  ];
  return (
    <>
      <section class="section">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
              <div class="section__title">
                <h2>Arbitration deals</h2>
                <p>
                  Browse a curated list of real-time arbitrage deals, complete
                  with detailed information about the involved cryptocurrencies
                  and exchanges.
                </p>
              </div>
            </div>
            <div class="col-12">
              <div class="deals">
                <div class="deals__table-wrap">
                  <table class="deals__table">
                    <thead>
                      <tr>
                        <th>Pair</th>
                        <th>Exchange</th>
                        <th>Date</th>
                        <th>Buying price</th>
                        <th>Selling price</th>
                        <th>Deal amount</th>
                        <th>Profit</th>
                        <th>Spread</th>
                      </tr>
                    </thead>

                    <tbody>
                      {dealsData.map((deal, index) => (
                        <tr key={index}>
                          <td>
                            <div class="deals__text">{deal.pair}</div>
                          </td>
                          <td>
                            <div class="deals__exchange">
                              <img src={deal.exchangefrom} alt="" />
                              <span class="green">{deal.exchangefromName}</span>
                              <i class="ti ti-arrow-move-right"></i>
                              <img src={deal.exchangeto} alt="" />
                              <span class="red">{deal.exchangetoName}</span>
                            </div>
                          </td>
                          <td>
                            <div class="deals__text">{deal.date}</div>
                          </td>
                          <td>
                            <div class="deals__text deals__text--buy">
                              <i class="ti ti-currency-dollar"></i>{deal.buyingPrice}
                            </div>
                          </td>
                          <td>
                            <div class="deals__text deals__text--sell">
                              <i class="ti ti-currency-dollar"></i>{deal.sellingPrice}
                            </div>
                          </td>
                          <td>
                            <div class="deals__text">${deal.dealAmount}</div>
                          </td>
                          <td>
                            <div class="deals__text deals__text--green">
                              +${deal.profit}
                            </div>
                          </td>
                          <td>
                            <div class="deals__text">{deal.spread}%</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <span class="screw screw--lines-bl"></span>
                <span class="screw screw--lines-br"></span>
                <span class="screw screw--lines-tr"></span>
                <span class="screw screw--lines-tl"></span>
              </div>
            </div>

            <div class="col-12">
              <div class="section__btns">
                <span class="section__btn">
                  View reports
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Deals;
