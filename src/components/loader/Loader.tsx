import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loader = () => {
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from("#loader h3", {
      opacity: 0,
      x: 40,
      duration: 1,
      stagger: 0.1,
    });
    tl.to("#loader h3", {
      opacity: 0,
      x: -10,
      duration: 1,
      stagger: 0.1,
    });
    tl.to("#loader", {
      opacity: 0,
    });
    tl.to("#loader", {
      display: "none",
    });
  });

  return (
    <div id="loader">
      <h3>Tomorrow's</h3>
      <h3>Brand,</h3>
      <h3>Today "</h3>
    </div>
  );
};

export default Loader;
