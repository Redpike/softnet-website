import React from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import { Link } from "gatsby";

const HeaderWrapper = styled.nav`
    padding: 35px;
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    z-index: 9999;
`;

const HeaderLogo = styled(Logo)`
    position: relative;
    z-index: 9999;
    width: 90px;

    img {
        width: 90px;
        height: auto;
    }
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <Link to="/"><HeaderLogo /></Link>
            <div>
                header
            </div>
        </HeaderWrapper>
    );
};

export default Header;
