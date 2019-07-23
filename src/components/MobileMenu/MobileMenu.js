import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MobileMenuWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9998;
    flex-direction: column;
    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
    transition: transform .25s ease-in-out;

    ${({ theme }) => theme.mq.desktop} {
        display: none;
    }
`;

const MobileMenuLinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const MenuLink = styled.li`
    margin: 20px 0;
    list-style: none;
    font-weight: bold;
    opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
    transition: opacity .25s .2s ease-in-out;
`;

const menuItems = [
    'Home',
    'SoftNet',
    'Praca'
];

const MobileMenu = ({ isOpen }) => (
    <MobileMenuWrapper isOpen={isOpen}>
        <MobileMenuLinksWrapper>
            {menuItems.map(item => (
                <MenuLink isOpen={isOpen} key={item}>
                    {item}
                </MenuLink>
            ))}
        </MobileMenuLinksWrapper>
    </MobileMenuWrapper>
);

MobileMenu.propTypes = {
    isOpen: PropTypes.bool
};

MobileMenu.defaultProps = {
    isOpen: false
};

export default MobileMenu;
