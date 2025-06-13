import About from "./components/home/about/About";
import Banner from "./components/home/banner/Banner";
import HowItWorks from "./components/home/howItWorks/HowItWorks";
import Navbar from "./components/home/navbar/Navbar";

function App() {
  return (
    <section className="bg-[#040206] spaceGroteskFont overflow-x-hidden">
      <div className="bg-linear-to-r from-[#0c0c12] to-[#000000]">
        <Navbar></Navbar>
        <Banner></Banner>
        <About></About>
        <HowItWorks></HowItWorks>
      </div>
    </section>
  );
}

export default App;
