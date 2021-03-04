import { useState, useEffect } from "react";

const useWindowsWidth = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  let checkScreenSize = () => {
    setIsScreenSmall(window.innerWidth < 600);
  };
  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
   
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  console.log(isScreenSmall)
  return isScreenSmall;
};

export default useWindowsWidth;
