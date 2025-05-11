import React from "react";
import HeadSection from "./HeadSection/HeadSection";
import GoalsSection from "./GoalsSection/GoalsSection";
import StrategySection from "./StrategySection/StrategySection";

const About: React.FC = () => {
  return (
    <>
      <HeadSection />
      <GoalsSection/>
      <StrategySection/>
    </>
  );
};

export default About;
