import React from "react";
import { JumbotronSection } from "../sections/jumbotronSection";
import { FooterSection } from "../sections/footerSection";
import { FaqSection } from "../sections/faqSection";
import { HeaderSection } from "../sections/headerSection";

export const Home = () => {
  return (
    <div>
      <HeaderSection />
      <JumbotronSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
};
