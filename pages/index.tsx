import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React from "react";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// const [showSummary, setShowSummary] = React.useState(false)

function calculateDeliveryPrice(e: Event) {
  e.preventDefault();
}

export default function Home() {
  return (
    <>
      <Head>
        <title>WOLT Delivery Fee Calculator</title>
        <meta
          name="description"
          content="Wolt Summer 2024 Engineering Internships Assignment - created by Phornphatch (ZUMO)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#009de0" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <main>
        <div className="main-container">
          <div className="title__wrapper">
            <Image
              src="/images/wolt-logo.svg"
              alt="wolt logo"
              width={200}
              height={75}
            />
            <div className="text--h1">Delivery Fee Calculator</div>
            <div className="text--sh1">
              <div>
                Calculate with confidence! No surprises in delivery prices
              </div>
              <div>your convenience, our commitment. 📦💰</div>
            </div>
          </div>
          <div className="calculator__card-wrapper">
            <div className="calculator__card-wrapper--left">
              <form
                onSubmit={(e) => {
                  setShowSummary(true);
                  calculateDeliveryPrice;
                }}
              >
                <div className="calculator__form-wrapper">
                  <div className="input__wrapper">
                    <label>
                      Cart value<span>*</span>
                    </label>
                    <span className="input__symbol--currency">
                      <input
                        type="number"
                        placeholder="Enter cart value"
                        className="price__input"
                        id="cartValue"
                      />
                    </span>
                  </div>
                  <div className="input__wrapper">
                    <label>
                      Delivery distance<span>*</span>
                    </label>
                    <span className="input__symbol--distance">
                      <input
                        type="number"
                        placeholder="Enter delivery distance"
                        className="price__input"
                        id="deliveryDistance"
                      />
                    </span>
                  </div>
                  <div className="input__wrapper">
                    <label>
                      Amount of Item(s)<span>*</span>
                    </label>
                    <div className="input--amount-of-item">
                      <button className="input__button--decrease">-</button>
                      <button className="input__button--increase">+</button>
                      <input
                        type="number"
                        placeholder="Enter amount of item(s)"
                        className="price__input"
                        id="amountOfItems"
                      />
                    </div>
                  </div>
                  <div className="input__wrapper">
                    <label>
                      Date/Time<span>*</span>
                    </label>
                    <input
                      type="datetime-local"
                      placeholder="Value"
                      className="price__input"
                      id="deliveredAt"
                    />
                  </div>
                </div>
                <div className="calculator__btn-wrapper">
                  <input
                    type="submit"
                    value="Calculate"
                    className="button--primary"
                  />
                </div>
              </form>
            </div>
            <div className="calculator__card-wrapper--right">
              {/* Before Click Calculate button */}
              <div className="calculator__animaiton-wrapper">
                <Image
                  src="/images/wolt-mascot-reading.svg"
                  alt="wolt mascot reading"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="dot-animation">
                  <div className="dot-animation__wrapper">
                    <span id="dot-1">.</span>
                    <span id="dot-2">.</span>
                    <span id="dot-3">.</span>
                    <span id="dot-4">.</span>
                    <span id="dot-5">.</span>
                  </div>
                </div>
              </div>
              {/* { showSummary && (
                <><div>No summary</div></>
              ) }
              { showSummary && (
                <><div>Show summary</div></>
              ) } */}

              {/* After Click Calculate button */}
              {/* <div className="calculator__summary-wrapper">
                <div className="text--h2">Summary</div>
                <div className="calculator__summary--list">
                  <div className="text--b1">Small order surcharge</div>
                  <div className="price">xx €</div>
                </div>
                <div className="calculator__summary--list">
                  <div className="text--b1">Delivery fee (... m)</div>
                  <div className="price">xx €</div>
                </div>
                <div className="calculator__summary--list">
                  <div className="text--b1">Amount of fee (...)</div>
                  <div className="price">xx €</div>
                </div>
                <div className="calculator__summary--list">
                  <div className="text--b1">Peak hours fee</div>
                  <div className="price">xx €</div>
                </div>
                <div className="calculator__summary--line" />
                <div className="calculator__summary--list">
                  <div className="text--b1">Discount</div>
                  <div className="price">xx €</div>
                  <div className="detail text--b2">
                    Maximum delivery fee 15 euros
                  </div>
                </div>
                <div className="calculator__summary--line" />
                <div className="calculator__summary--list">
                  <div className="text--h2">Total</div>
                  <div className="price text--h2">xx €</div>
                </div>

                <a href="https://wolt.com/fi/discovery" className="button--secondary calculator__order-button" target="_blank">Order Now -></a>
                <Image
                  className="mascot-fly"
                  src="/images/wolt-mascot-fly.svg"
                  alt="wolt mascot flying"
                  width={80}
                  height={79}
                />
              </div> */}
            </div>
          </div>
          <div className="contact__wrapper">
            <div>Applying for front-end position in Helsinki</div>
            <div>Phornphatch Hiranpattanakul (ZUMO)</div>
            <a href="phornphatch@gmail.com">phornphatch@gmail.com</a>
            <a href="http://findingzumo.com/" target="_blank">
              findingzumo.com
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
