import React from "react";
import MainTemplate from "../templates/MainTemplate/MainTemplate";
import FrontSlider from "../components/FrontSlider/FrontSlider";
import CompanyGoals from "../components/CompanyGoals/CompanyGoals";
import Support from "../components/Support/Support";

const IndexPage = () => (
  <>
    <MainTemplate seoTitle='Strona główna'>
      <FrontSlider />
      <CompanyGoals />
      <Support />
    </MainTemplate>
  </>
);

export default IndexPage;
