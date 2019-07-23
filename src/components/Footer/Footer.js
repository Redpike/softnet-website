import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #FFF;
    background: rgba(0, 0, 0, 1) no-repeat center;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <div>
                Footer
            </div>
        </FooterWrapper>
    );
};

export default Footer;
