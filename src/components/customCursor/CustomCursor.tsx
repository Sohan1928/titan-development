import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  let isInside = true;

  useGSAP(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Mouse move effect
    const moveCursor = (e: MouseEvent) => {
      if (!isInside) return;
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", moveCursor);

    // Window leave / enter
    const handleWindowEnter = () => {
      isInside = true;
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleWindowLeave = () => {
      isInside = false;
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Use document for mouse leave/enter detection
    document.addEventListener("mouseleave", handleWindowLeave);
    document.addEventListener("mouseenter", handleWindowEnter);

    // Hover effect on links & buttons
    const hoverElements = document.querySelectorAll("a, button");

    const handleMouseEnter = () =>
      gsap.to(cursor, { scale: 1.5, duration: 0.3 });
    const handleMouseLeave = () => gsap.to(cursor, { scale: 1, duration: 0.3 });

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleWindowEnter);
      document.removeEventListener("mouseleave", handleWindowLeave);

      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor"></div>;
};

export default CustomCursor;
