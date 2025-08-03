import About from "./components/home/about/About";
import Banner from "./components/home/banner/Banner";
import HowItWorks from "./components/home/howItWorks/HowItWorks";
import Navbar from "./components/home/navbar/Navbar";
import TitanoApp from "./components/home/titanoApp/TitanoApp";

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
        </div>
      </div>
    </section>
  );
}

export default App;
