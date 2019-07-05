import React from "react";
import MainTemplate from "../templates/MainTemplate/MainTemplate";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
};

const IndexPage = () => (
  <MainTemplate>
      <h1 style={style}>Strona w budowie</h1>
  </MainTemplate>
);

export default IndexPage;
