import React from 'react';
import styled from 'styled-components';
import facebookIcon from '../../assets/images/social-media/facebook.png';
import facebookWhiteIcon from '../../assets/images/social-media/facebook_white.png';
import linkedinIcon from '../../assets/images/social-media/linkedin.png';
import linkedinWhiteIcon from '../../assets/images/social-media/linkedin_white.png';
import SocialMediaIcon from '../SocialMediaIcon/SocialMediaIcon';
import SecondaryMenu from '../SecondaryMenu/SecondaryMenu';

const FooterSpacer = styled.div`
    flex-grow: 1;
`;

const FooterWrapper = styled.footer`
    padding: 80px 0 40px;

    ${({ theme }) => theme.mq.desktop_lt} {
        padding: 80px 0 0;
    }
`;

const FooterInnerWrapper = styled.div`
    max-width: 1100px;
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;

    ${({ theme }) => theme.mq.desktop_lt} {
        flex-direction: column-reverse;
        width: 100%;
    }
`;

const CompanyDataWrapper = styled.div`
    ${({ theme }) => theme.mq.desktop_lt} {
        background: rgba(128, 0, 12, 1) no-repeat center;
        color: #F3F3F3;
        padding: 50px 0 25px;
        text-align: center;
    }
`;

const CompanyDataInnerWrapper = styled.div`
    margin-bottom: 30px;

    h3, h4 {
        display: block;
        margin: 0;
    }

    h3 {
        margin-bottom: 20px;
    }

    h4 {
        line-height: 2.8rem;
    }
`;

const SocialMediaWrapper = styled.div`
    ${({ theme }) => theme.mq.desktop_lt} {
        display: none;
    }

    > button:first-child {
        margin-right: 10px;
    }
`;

const SocialMediaMobileWrapper = styled.div`
    display: none;

    ${({ theme }) => theme.mq.desktop_lt} {
        display: block;
    }

    > button:first-child {
        margin-right: 10px;
    }
`;

const FooterMenuWrapper = styled.div`
    ${({ theme }) => theme.mq.desktop_lt} {
        margin-bottom: 80px;
    }
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
                <SocialMediaMobileWrapper>
                    <SocialMediaIcon src={facebookWhiteIcon} />
                    <SocialMediaIcon src={linkedinWhiteIcon} />
                </SocialMediaMobileWrapper>
            </CompanyDataWrapper>
            <FooterSpacer />
            <FooterMenuWrapper>
                <SecondaryMenu />
            </FooterMenuWrapper>
        </FooterInnerWrapper>
    </FooterWrapper>
);

export default Footer;
