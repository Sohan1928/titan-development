import IconSvg from "../navbar/svg/IconSvg2";
import SmallArrow from "./svg/SmallArrow";
import SmallCircle from "./svg/SmallCircle";
import { GiProgression } from "react-icons/gi";
import { IoStatsChart } from "react-icons/io5";
import { IoHourglassOutline } from "react-icons/io5";

const TitanoApp = () => {
  return (
    <section className="md:px-[88px] lg:px-[180px] pt-[90px] pb-56">
      <div className="flex items-start justify-center gap-16">
        {/* left side content */}
        <div className="w-full lg:w-1/2">
          <h4 className="tracking-widest text-[#6CDDB5]">TITANO APP</h4>
          <h2 className="text-[#D2DCE7] text-5xl font-medium mt-4">
            The TITANO APP
          </h2>
          <p className="text-[#7C8697] mt-6">
            The Titano App provides Titano holders with up to the second <br />
            information about their Titano holdings. Information includes:
          </p>
          {/* li section */}
          <div className="relative text-[#D2DCE7] items-center justify-center text-start text-lg space-y-4 pl-6 mt-8">
            <h4>The Current Titano Marketcap</h4>
            <h4>Your Current Titano Token Balance in Your Wallet</h4>
            <h4>The Time and Amount of Your Next Rebase Reward</h4>
            <h4>
              A calculator to project your future Titano token and dollar <br />
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
          <div className="flex items-center gap-4">
            <button className="text-[#6CDDB5] text-xl cursor-pointer hover:text-[#9daaa5] mt-2">
              Open Apps
            </button>
            <div className="mt-2">
              <SmallArrow></SmallArrow>
            </div>
          </div>
        </div>

        {/* right side content */}
        <div className="w-full lg:w-1/2">
          <div className="flex pt-16 bg-[#102125] rounded-3xl text-white font-sans overflow-hidden">
            <div className="bg-linear-to-b from-[#080A12] to-[#0C1423] px-6 pt-8">
              {/* top text section */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="">
                    <IconSvg></IconSvg>
                  </div>
                  <div className="">
                    <h2 className="text-2xl font-bold text-[#D2DCE7]">
                      Titano.finance
                    </h2>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-sm text-[#D1DAE6] font-medium mb-1 text-right">
                    $ 0.032589
                  </p>
                  <button className="bg-[#8BD8B4 bg-linear-to-l from-[#6CA98A] to-[#8BD8B4] text-black px-5 py-2 rounded-md font-bold">
                    Connect Wallet
                  </button>
                </div>
              </div>
              <div className="flex gap-8 mt-6">
                {/* side bar */}
                <div className="w-32 pt-8">
                  <div>
                    <ul className="space-y-6 text-base font-medium">
                      <li className="flex items-center gap-2 cursor-pointer">
                        🏠 Home
                      </li>
                      <li className="flex items-center gap-2 cursor-pointer">
                        📈 Stake
                      </li>
                      <li className="flex items-center gap-2 cursor-pointer">
                        📄 Docs
                      </li>
                      <li className="flex items-center gap-2 cursor-pointer">
                        👥 Social
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Main Content */}
                <div className="flex-1 flex flex-col">
                  {/* Top Bar */}
                  <div className="flex justify-between items-center w-full">
                    <div className="flex gap-">
                      <div className="py-4 rounded-lg w-[180px]">
                        <p className="text-sm pb-2 text-[#ECECEC] flex gap-2 items-center font-medium">
                          <div className="text-[#E5B261] text-xl">
                            <GiProgression></GiProgression>
                          </div>
                          Market Cap
                        </p>
                        <button className="bg-[#0d1524] border-2 border-[#0d1524] border-t-[#5D4D35] shadow-2xl rounded-2xl flex items-center px-6 py-2 cursor-pointer">
                          $ 22,849,116.94
                        </button>
                      </div>
                      <div className="py-4 rounded-lg w-[180px]">
                        <p className="text-sm pb-2 text-[#ECECEC] flex gap-2 items-center font-medium">
                          <div className="text-[#99E9C7] text-xl">
                            <IoStatsChart></IoStatsChart>
                          </div>
                          APY Statistics
                        </p>
                        <button className="bg-[#0d1524] border-2 border-[#0d1524] border-t-[#507F6A] shadow-2xl rounded-2xl flex items-center px-6 py-2 cursor-pointer">
                          102 483.58%
                        </button>
                      </div>
                      <div className="py-4 rounded-lg w-[180px]">
                        <p className="text-sm pb-2 text-[#ECECEC] flex gap-2 items-center font-medium">
                          <div className="text-[#8065D8] text-xl">
                            <IoHourglassOutline></IoHourglassOutline>
                          </div>
                          Next Rebase
                        </p>
                        <button className="bg-[#0d1524] border-2 border-[#0d1524] border-t-[#4545B1] shadow-2xl text-[#5B6BEE] font-semibold rounded-2xl flex items-center px-6 py-2 cursor-pointer">
                          00:10:09
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Stats and Calculator */}
                  <div className="flex gap-6">
                    {/* Staking Statistics */}
                    <div className="flex-1 bg-[#151c35] p-6 rounded-lg shadow-md">
                      <p className="text-sm text-gray-400 mb-2">Current APY:</p>
                      <p className="text-3xl font-bold text-green-400 mb-4">
                        102 483.58%
                      </p>
                      <div className="space-y-2 text-sm">
                        <p>
                          Your Wallet Balance:{" "}
                          <span className="text-gray-300">0</span>
                        </p>
                        <p>
                          Next Reward Amount:{" "}
                          <span className="text-gray-300">0</span>
                        </p>
                        <p>
                          Next Reward Yield:{" "}
                          <span className="text-gray-300">0,03958%</span>
                        </p>
                        <p>
                          ROI (5-Day Rate):{" "}
                          <span className="text-green-400">9.94%</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Calculator */}
                <div className="w-[320px] bg-[#151c35] p-6 mt-10 rounded-lg shadow-md">
                  <h3 className="text-sm text-gray-400 mb-2">
                    Estimate Your Returns
                  </h3>
                  <input
                    type="text"
                    className="w-full p-3 rounded bg-[#0f1324] text-white placeholder:text-gray-500 mb-4"
                    placeholder="Add Token Amount Here..."
                  />
                  <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                    <button className="bg-[#2c3557] py-2 rounded">
                      7 days
                    </button>
                    <button className="bg-[#2c3557] py-2 rounded">
                      1 Month
                    </button>
                    <button className="bg-[#2c3557] py-2 rounded">
                      6 Month
                    </button>
                    <button className="bg-orange-400 text-black py-2 rounded">
                      1 year
                    </button>
                  </div>
                  <div className="text-sm mb-2">
                    <p>
                      $TITANO Balance: <span className="text-gray-300">0</span>
                    </p>
                    <p>
                      Total USD Balance:{" "}
                      <span className="text-gray-300">$0</span>
                    </p>
                  </div>
                  <button className="mt-4 w-full py-2 bg-gradient-to-r from-orange-400 to-yellow-500 text-black font-bold rounded">
                    Swap $TITANO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitanoApp;
