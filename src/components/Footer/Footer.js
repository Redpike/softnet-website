import React from 'react';
import styled from 'styled-components';
import facebookIcon from '../../assets/images/social-media/facebook.png';
import linkedinIcon from '../../assets/images/social-media/linkedin.png';
import SocialMediaIcon from '../SocialMediaIcon/SocialMediaIcon';

const FooterWrapper = styled.footer`
    padding: 100px 0;
`;

const FooterInnerWrapper = styled.div`
    max-width: 1100px;
    width: 95%;
    margin: 0 auto;
`;

const CompanyDataWrapper = styled.div`

`;

const CompanyDataInnerWrapper = styled.div`
    h3, h4 {
        margin: 0;
    }
`;

const SocialMediaWrapper = styled.div`

`;

const FooterMenuWrapper = styled.div`

`;

const Footer = () => (
    <FooterWrapper>
        <FooterInnerWrapper>
            <CompanyDataWrapper>
                <CompanyDataInnerWrapper>
                    <h3>
                        SoftNet Sp. z o.o.
                    </h3>
                    <h4>
                        Copyright © 2019 SoftNet Sp. z o.o.
                    </h4>
                    <h4>
                        Wszystkie prawa zastrzeżone.
                    </h4>
                </CompanyDataInnerWrapper>
                <SocialMediaWrapper>
                    <SocialMediaIcon src={facebookIcon} />
                    <SocialMediaIcon src={linkedinIcon} />
                </SocialMediaWrapper>
            </CompanyDataWrapper>
            <FooterMenuWrapper>

            </FooterMenuWrapper>
        </FooterInnerWrapper>
    </FooterWrapper>
);

export default Footer;
