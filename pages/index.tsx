import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap"
          rel="stylesheet"
        />
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
              <div className="calculator__form-wrapper">
                <div className="input__wrapper">
                  <label>
                    Cart value<span>*</span>
                  </label>
                  <span className="input__symbol--currency">
                    <input
                      type="number"
                      placeholder="Enter cart Value"
                      className="price__input"
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
                    />
                  </span>
                </div>
                <div className="input__wrapper">
                  <label>
                    Amount of Item(s)<span>*</span>
                  </label>
                  <div className="input--amount-of-item">
                    <div className="input__button--decrease">-</div>
                    <div className="input__button--increase">+</div>
                    <input
                      type="number"
                      placeholder="Enter amount of item(s)"
                      className="price__input"
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
                  />
                </div>
              </div>
              <div className="calculator__btn-wrapper">
                <div className="button--primary">Calculate</div>
              </div>
            </div>
            <div className="calculator__card-wrapper--right">
              {/* Before Click Calculate button */}
              {/* <Image
                src="/images/wolt-mascot-reading.svg"
                alt="wolt mascot reading"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
              /> */}

              {/* After Click Calculate button */}
              <div className="calculator__summary-wrapper">
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
