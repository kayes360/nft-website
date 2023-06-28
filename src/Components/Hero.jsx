import React, { useEffect, useRef } from "react";
import HeroCardProfile from "../assets/img/hero-card-profile.png";
import CountUp from "react-countup";
import CurvedTextWithIcon from "../assets/img/circle-text-with-icon.png";
import CurvedText from "../assets/img/circle-text.png";

export default function Hero() {
  //  const circularDiv = useRef();

  //  useEffect(() => {
  //   console.log(circularDiv.current)
  //    const circularInputText = circularDiv.current.innerText;
  //      let circularOutputText = circularInputText
  //        .split("")
  //        .map(
  //          (char, i) =>
  //            `<span style = "transform: rotate(${i * 5}deg)">${char} </span>`
  //        )
  //        .join("");
  //        circularDiv.current.innerHTML = circularOutputText;
  //   }, [])

  return (
    <section>
      <div
        className="container"
        style={{ marginTop: "5rem", marginBottom: "5rem" }}
      >
        <div className="row">
          <div className="col-xxl 6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <p className="hero-main-text fs-1">
              DISCOVER,AND COLLECT DIGITAL ART NFTS
            </p>
            <p className="hero-sub-text">
              Digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
            </p>
            <div>
              <button
                type="button"
                className="btn px-5 py-3 rounded-pill btn-dark-blue fw-bold"
              >
                Explore Now
              </button>
              <div className="counter-wrapper d-flex flex-start gap-4"> 
                  <div className="">
                    <span className="count counter">
                      <CountUp end={98} duration={5} /> K
                    </span>
                    <span className="count-symbol">+</span>
                    <p className="">Artwork</p>
                  </div>
                  <div className="">
                    <span className="count counter">
                      <CountUp end={12} duration={5} />K
                    </span>
                    <span className="count-symbol">+</span>
                    <p className="">Auction</p>
                  </div>
                  <div className="">
                    <span className="count counter">
                      <CountUp end={15} duration={5} />K
                    </span>
                    <span className="count-symbol">+</span>
                    <p className="">Artist</p>
                  </div> 
              </div>
            </div>
          </div>
          <div className="col-xxl 6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="">
              <div className="hero-cards-wrapper position-relative">
                <div className="position-absolute">
                  <div className=" hero-card-t mx-auto my-auto hero-card-t-one pt-3 px-4 position-relative">
                    <p className="title fw-bold">Abstr Gradient NFT</p>
                    <div className="d-flex align-items-center">
                      <div className="title-img me-2">
                        <img
                          src={HeroCardProfile}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <span className="name">Arkhan17</span>
                    </div>

                    <div className="bid-box p-3 mb-5  me-lg-0 me-md-0 me-sm-2 me-2  rounded-3 d-flex justify-content-between position-absolute bottom-0 start-50 translate-middle-x">
                      <div className="current-bid">
                        <p className="mb-0">Current Bid</p>
                        <svg
                          width="15"
                          height="24"
                          viewBox="0 0 15 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_0_309)">
                            <path
                              d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_0_309">
                              <rect width="15" height="24" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="">0.25 ETH</span>
                      </div>
                      <div className="end-time">
                        <p className="mb-0">Ends in</p>
                        <span className="">12h 43m 42s</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="position-absolute">
                  <div className="hero-card-t mx-auto my-auto hero-card-t-two pt-3 px-4 position-relative">
                    <p className="title fw-bold">Abstr Gradient NFT</p>
                    <div className="d-flex align-items-center">
                      <div className="title-img me-2">
                        <img
                          src={HeroCardProfile}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <span className="name">Arkhan17</span>
                    </div>
                    <div className="bid-box mx-auto p-3 mb-5 rounded-3 d-flex justify-content-between position-absolute bottom-0">
                      <div className="current-bid">
                        <p className="mb-0">Current Bid</p>
                        <svg
                          width="15"
                          height="24"
                          viewBox="0 0 15 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_0_309)">
                            <path
                              d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_0_309">
                              <rect width="15" height="24" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>0.25 ETH</span>
                      </div>
                      <div className="end-time">
                        <p className="mb-0">Ends in</p>
                        <span>12h 43m 42s</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="position-absolute">
                  <div className="hero-card-t mx-auto my-auto hero-card-t-three pt-3 px-4 position-relative">
                    <p className="title fw-bold">Abstr Gradient NFT</p>
                    <div className="d-flex align-items-center">
                      <div className="title-img me-2">
                        <img
                          src={HeroCardProfile}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <span className="name">Arkhan17</span>
                    </div>
                    <div className="bid-box mx-auto p-3 mb-5 rounded-3 d-flex justify-content-between position-absolute bottom-0">
                      <div className="current-bid">
                        <p className="mb-0">Current Bid</p>
                        <svg
                          width="15"
                          height="24"
                          viewBox="0 0 15 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_0_309)">
                            <path
                              d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_0_309">
                              <rect width="15" height="24" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>0.25 ETH</span>
                      </div>
                      <div className="end-time">
                        <p className="mb-0">Ends in</p>
                        <span>12h 43m 42s</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="position-absolute hero-circle d-lg-block d-md-block d-sm-none d-none">
                  <picture className="position-relative">
                    <img
                      src={CurvedText}
                      className="circular-div"
                      width={90}
                      alt=""
                    />
                    <svg
                      className="position-absolute top-50 start-50 translate-middle circuler-svg"
                      width="15"
                      height="24"
                      viewBox="0 0 15 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_0_309)">
                        <path
                          d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_0_309">
                          <rect width="15" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
