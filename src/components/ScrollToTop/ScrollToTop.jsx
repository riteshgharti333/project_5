import React, { useEffect, useState } from "react";

import "./ScrollToTop.scss";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = () => {
    const scrollHeight = window.scrollY;
    const triggerPoint = document.body.scrollHeight * 0.2; // 40% of page height
    setIsVisible(scrollHeight > triggerPoint);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <button
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <IoIosArrowUp className="scroll-to-top__icon" />
    </button>
  );
};

export default ScrollToTop;
