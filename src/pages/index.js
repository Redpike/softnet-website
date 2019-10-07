import React from "react";
import MainTemplate from "../templates/MainTemplate/MainTemplate";
import FrontSlider from "../components/FrontSlider/FrontSlider";
import CompanyGoals from "../components/CompanyGoals/CompanyGoals";
import Support from "../components/Support/Support";
import Footer from "../components/Footer/Footer";

const IndexPage = () => (
  <>
    <MainTemplate seoTitle='Strona główna'>
      <FrontSlider />
      <CompanyGoals />
      <Support />
      <Footer />
    </MainTemplate>
  </>
);

export default IndexPage;
