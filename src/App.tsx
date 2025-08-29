import { ScrollSmoother } from "gsap/all";
import CustomCursor from "./components/customCursor/CustomCursor";
import About from "./components/home/about/About";
import Banner from "./components/home/banner/Banner";
import Earn from "./components/home/earn/Earn";
import HowItWorks from "./components/home/howItWorks/HowItWorks";
import Milestones from "./components/home/milestones/Milestones";
import Navbar from "./components/home/navbar/Navbar";
import TitanoApp from "./components/home/titanoApp/TitanoApp";
import Tokenomics from "./components/home/tokenomics/Tokenomics";
// import Loader from "./components/loader/Loader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollSmoother);

function App() {
  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.3,
      smoothTouch: 0.1,
      effects: true,
    });

    return () => {
      smoother.kill(); // cleanup
    };
  }, []);

  return (
    <section>
      {/* loader */}
      {/* <Loader></Loader> */}
      <div className="bg-[#040206] spaceGroteskFont overflow-hidden">
        {/* custom cursor */}
        <CustomCursor></CustomCursor>
        <div id="smooth-wrapper" className="relative h-full overflow-hidden">
          <div
            id="smooth-content"
            className="bg-gradient-to-b from-[#1C1B2E] to-[#000000] gsap-animated"
          >
            <div className="max-w-[1600px] mx-auto border">
              <Navbar></Navbar>
              <Banner></Banner>
              <About></About>
              <HowItWorks></HowItWorks>
              <TitanoApp></TitanoApp>
              <Earn></Earn>
              <Tokenomics></Tokenomics>
              <Milestones></Milestones>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
