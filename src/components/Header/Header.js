import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import { Link } from "gatsby";
import Hamburger from "../Hamburger/Hamburger";
import MobileMenu from "../MobileMenu/MobileMenu";
import DesktopMenu from "../DesktopMenu/DesktopMenu";

const HeaderWrapper = styled.nav`
    position: sticky;
    left: 0;
    top: 0;
    display: flex;
    width: 100%;
    padding: 10px 35px;
    justify-content: space-between;
    align-items: center;
    z-index: 9999;

    ${({ theme }) => theme.mq.desktop} {
        padding: 20px 35px;
    }
`;

const HeaderLogo = styled(Logo)`
    position: relative;
    z-index: 9999;
    width: 35px;

    img {
        width: 35px;
        height: auto;
    }

    ${({ theme }) => theme.mq.desktop} {
        width: 55px;

        img {
            width: 55px;
        }
    }
`;

const Header = () => {
    const [isMenuOpen, setMenuState] = useState(false);

    const toggleMobileMenu = () => {
        setMenuState(!isMenuOpen);
    };

    return (
        <HeaderWrapper>
            <Link to="/"><HeaderLogo /></Link>
            <DesktopMenu />
            <Hamburger onClick={toggleMobileMenu} isOpen={isMenuOpen} />
            <MobileMenu isOpen={isMenuOpen} />
        </HeaderWrapper>
    );
};

export default Header;
