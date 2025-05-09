import React from "react";
import HeroSection from './../components/HeroSection';
import VisaSuccessBarChart from "./../components/VisaSuccessChart";
import HowWeWork from "./../components/HowWeWork";
import WhyChooseWEGPremium from "./../components/WhyChooseWEGPremium";
import WhyWeAreDifferentPremium from "./../components/WhyWeAreDifferentPremium";
import ChooseYourCountryPremium from "./../components/ChooseYourCountryPremium";


const home = () => {
  return (
    <div>
      <HeroSection />
      <ChooseYourCountryPremium />
      <WhyChooseWEGPremium />
      <WhyWeAreDifferentPremium />
      <VisaSuccessBarChart />
      <HowWeWork />
    </div>
  );
};

export default home;
