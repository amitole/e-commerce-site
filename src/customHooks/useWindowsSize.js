import { useState, useEffect } from "react";

const getWindowsSize = () => {
  const { innerWidth, innerHeight } = window;

  return {
    width: innerWidth,
    height: innerHeight,
  };
};

const useWindoeSize = () => {
  const [windowSize, setWindowSize] = useState(getWindowsSize());

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getWindowsSize());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindoeSize;
