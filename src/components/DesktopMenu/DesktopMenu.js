import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import menuItems from '../../shared/MenuItems';

const DesktopMenuWrapper = styled.div`
    ${({ theme }) => theme.mq.desktop_lt} {
        display: none;
    }
`;

const MenuLinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const MenuLink = styled.li`
    margin: 0 20px;
    list-style: none;
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-size: 1.8rem;
`;

const DesktopMenu = ({ isDesktop }) => (
    <DesktopMenuWrapper>
        <MenuLinksWrapper>
            {menuItems.map(item => (
                <MenuLink key={item}>
                    {item}
                    {/* <Link to={item}>{item}</Link> */}
                </MenuLink>
            ))}
        </MenuLinksWrapper>
    </DesktopMenuWrapper>
);

DesktopMenu.propTypes = {
    isDesktop: PropTypes.bool
};

DesktopMenu.defaultProps = {
    isDesktop: true
};

export default DesktopMenu;
