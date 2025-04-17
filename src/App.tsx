import Banner from "./components/home/banner/Banner";
import Navbar from "./components/home/navbar/Navbar";

function App() {
  return (
    <section className="bg-[#040206] spaceGroteskFont">
      <div className="bg-linear-to-r from-[#1C1B2E] to-[#000000]">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
    </section>
  );
}

export default App;
