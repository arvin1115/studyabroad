import React from "react";
import MobileSmallScreenNavbar from "./mobilesmallscreennavbar";
import LaptopLargeScreenNavbar from "./laptoplargescreennavbar";

const NavigationWrapper = () => (
  <>
    {/* Mobile Navbar */}
    <MobileSmallScreenNavbar />

    {/* Desktop Navbar */}
    <LaptopLargeScreenNavbar />

    {/* Spacer matching navbar total height */}
    <div className="h-[96px]" />
  </>
);

export default NavigationWrapper;
