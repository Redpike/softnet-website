import React from "react";
import SEO from "../../components/seo";
import {ThemeProvider} from "styled-components";
import PropTypes from "prop-types";
import {theme} from "../../assets/styles/theme";
import GlobalStyle from "../../assets/styles/GlobalStyle";
import Header from "../../components/Header/Header";

const MainTemplate = ({seoTitle, children}) => (
    <>
        <SEO title={seoTitle}/>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <>
                <Header />
                {children}
            </>
        </ThemeProvider>
    </>
);

MainTemplate.defaultProps = {
    seoTitle: ''
}

MainTemplate.propTypes = {
    seoTitle: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default MainTemplate;
