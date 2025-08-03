import SmallArrow from "./svg/SmallArrow";
import SmallCircle from "./svg/SmallCircle";
import TitanoRightCircleSvg from "./svg/TitanoRightCircleSvg";
import { GoInfo } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { IoIosApps } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiSliders } from "react-icons/pi";
// import IconSvg from "../navbar/svg/IconSvg2";
import { GiProgression } from "react-icons/gi";
import { IoStatsChart } from "react-icons/io5";
import { IoHourglassOutline } from "react-icons/io5";

const TitanoApp = () => {
  return (
    <section className="lg:pl-[100px] pt-[90px] pb-56 relative">
      <div className="flex w-full justify-between gap-16">
        {/* left side content */}
        <div className="titanoLeftContent w-4/12">
          <h5>TITANO APP</h5>
          <h3 className="mt-5">The TITANO APP</h3>
          <p className="mt-5">
            The Titano App provides Titano holders with up to the second
            information about their Titano holdings. Information includes:
          </p>
          {/* li section */}
          <div className="contentlist relative space-y-4 pl-6 mt-8">
            <h4>The Current Titano Marketcap</h4>
            <h4>Your Current Titano Token Balance in Your Wallet</h4>
            <h4>The Time and Amount of Your Next Rebase Reward</h4>
            <h4>
              A calculator to project your future Titano token and dollar
              amounts in 7 Days, 1 Month, 6 Months and 1 Year.
            </h4>
            <div className="absolute left-0 top-2">
              <SmallCircle></SmallCircle>
            </div>
            <div className="absolute left-0 top-[50px]">
              <SmallCircle></SmallCircle>
            </div>
            <div className="absolute left-0 top-[95px]">
              <SmallCircle></SmallCircle>
            </div>
            <div className="absolute left-0 top-[139px]">
              <SmallCircle></SmallCircle>
            </div>
          </div>
          <div className="btn mt-[50px] flex items-center gap-5">
            <button>Open Apps</button>
            <SmallArrow></SmallArrow>
          </div>
        </div>

        {/* right side content */}
        <div className="w-8/12">
          <div className="flex pt-[56px] relative z-99 bg-[#102125] rounded-[20px] overflow-x-hidden">
            <div className="3-circle">
              <span className="w-[9px] h-[9px] bg-[#FF5F56] rounded-full absolute top-6 left-6"></span>
              <span className="w-[9px] h-[9px] bg-[#FFBE2E] rounded-full absolute top-6 left-10"></span>
              <span className="w-[9px] h-[9px] bg-[#27C940] rounded-full absolute top-6 left-14"></span>
            </div>
            <div className="right-content">
              {/* title content */}
              <div className="titano-right-box-title">
                <div className="title">
                  <img src="titan icon.png" alt="titano image coming soon" />
                  <h4>Titano.finance</h4>
                </div>
                <div className="title-right">
                  <div className="summary">
                    <li>
                      <GoInfo></GoInfo>
                    </li>
                    <span>$ 0.032589</span>
                  </div>
                  <button>Connect Wallet</button>
                </div>
              </div>
              <div className="main-content flex items-start justify-between pt-7">
                <div className="menu w-1/8">
                  <ul>
                    <li>
                      <GoHome></GoHome>Home
                    </li>
                    <li>
                      <IoIosApps></IoIosApps>Steke
                    </li>
                    <li>
                      <IoDocumentText></IoDocumentText>Docs
                    </li>
                    <li>
                      <BsFillPeopleFill></BsFillPeopleFill>Social
                      <span>
                        <MdKeyboardArrowDown></MdKeyboardArrowDown>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="account-details w-4/8">
                  {/* top content */}
                  <div className="top-content">
                    <div className="progress-content">
                      <ul>
                        <li className="progress-icon">
                          <GiProgression></GiProgression>
                        </li>
                        <li>Market Cap</li>
                      </ul>
                      <button>$ 229,114</button>
                    </div>
                    <div className="chart-content">
                      <ul>
                        <li className="chart-icon">
                          <IoStatsChart></IoStatsChart>
                        </li>
                        <li>APY Statistics</li>
                      </ul>
                      <div className="chart-button">
                        <button>10 43,58%</button>
                        <span>APY</span>
                      </div>
                    </div>
                    <div className="rebase-content">
                      <ul>
                        <li className="rebase-icon">
                          <IoHourglassOutline></IoHourglassOutline>
                        </li>
                        <li>Next Rebase</li>
                      </ul>
                      <button>00:10:09</button>
                    </div>
                  </div>
                  {/* finance content */}
                  <div className="finance-box-section">
                    <div className="title">
                      <h5>Staking Statistics</h5>
                    </div>
                    {/* finance box */}
                    <div className="finance-box">
                      <div className="finance-title">
                        <h4>Current APY:</h4>
                        <p>102 483.58%</p>
                      </div>
                      <div className="box-main-content">
                        <ul className="wallet-balance">
                          <li>Your Wallet Balance:</li>
                          <li>0</li>
                        </ul>
                        <ul className="next-amount">
                          <li>Next Reward Amout:</li>
                          <li>0</li>
                        </ul>
                        <ul className="next-yield">
                          <li>Next Reward yield:</li>
                          <li>0,03958%</li>
                        </ul>
                        <ul className="roi">
                          <li>ROI (5-Day Rate):</li>
                          <li>9,94%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* calculator */}
                <div className="calculator w-3/8">
                  <div className="title">
                    <h4>
                      <PiSliders></PiSliders>Calculator
                    </h4>
                  </div>
                  {/* cart content */}
                  <div className="cart-container">
                    <div className="cart-title">
                      <h4>Estimate Returns</h4>
                      <input
                        className="title-input"
                        type="text"
                        placeholder="Add Amount Here..."
                      />
                    </div>
                    <div className="cart-trial-btns">
                      <ul>
                        <li>7 Days</li>
                        <li>1 Month</li>
                        <li>6 Months</li>
                        <li>1 Year</li>
                      </ul>
                    </div>
                    <div className="cart-last-contents">
                      <div className="input-group">
                        <label htmlFor="titano">$TITANO Balance</label>
                        <input type="text" id="titano" value="0" readOnly />
                      </div>
                      <div className="input-group">
                        <label htmlFor="usd">Total USD Balance:</label>
                        <input type="text" id="usd" value="$ 0" readOnly />
                      </div>
                      <p>
                        Earnings Calculated, Indicate When The Rebase Reward For
                        365 Days
                      </p>
                      <button className="mx-auto">Swap $TITANO</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-96 z-0 -right-36 pointer-events-none overflow-hidden">
          <TitanoRightCircleSvg></TitanoRightCircleSvg>
        </div>
      </div>
    </section>
  );
};

export default TitanoApp;
