import React from "react";
import MainTemplate from "../templates/MainTemplate/MainTemplate";
import FrontSlider from "../components/FrontSlider/FrontSlider";
import CompanyGoals from "../components/CompanyGoals/CompanyGoals";

const IndexPage = () => (
  <>
    <MainTemplate>
      <FrontSlider />
      <CompanyGoals />
    </MainTemplate>
  </>
);

export default IndexPage;
