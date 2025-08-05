import About from "./components/home/about/About";
import Banner from "./components/home/banner/Banner";
import Earn from "./components/home/earn/Earn";
import HowItWorks from "./components/home/howItWorks/HowItWorks";
import Milestones from "./components/home/milestones/Milestones";
import Navbar from "./components/home/navbar/Navbar";
import TitanoApp from "./components/home/titanoApp/TitanoApp";
import Tokenomics from "./components/home/tokenomics/Tokenomics";

function App() {
  return (
    <section className="bg-[#040206] spaceGroteskFont overflow-hidden">
      <div className="bg-gradient-to-b from-[#1C1B2E] to-[#000000]">
        <div className="max-w-[1600px] mx-auto">
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
    </section>
  );
}

export default App;
