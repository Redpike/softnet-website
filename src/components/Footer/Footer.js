import React from 'react';
import styled from 'styled-components';
import facebookIcon from '../../assets/images/social-media/facebook.png';
import linkedinIcon from '../../assets/images/social-media/linkedin.png';
import SocialMediaIcon from '../SocialMediaIcon/SocialMediaIcon';
import secondaryMenuItems from '../../shared/SecondaryMenuItems';

const FooterWrapper = styled.footer`
    padding: 80px 0;
`;

const FooterInnerWrapper = styled.div`
    max-width: 1100px;
    width: 95%;
    margin: 0 auto;
`;

const CompanyDataWrapper = styled.div`

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

    > button:first-child {
        margin-right: 10px;
    }
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
                {secondaryMenuItems.map(element => {
                // TODO Refactor to style-components
                if (element.links) {
                        return (
                            <>
                                <div className='secondary-menu__header'>
                                    <h4>{element.header}</h4>
                                </div>
                                <div className='secondary-menu__links'>
                                    {element.links.map(link => (
                                        <div>{link.caption}</div>
                                    ))}
                                </div>
                            </>
                        );
                    }
                })}
            </FooterMenuWrapper>
        </FooterInnerWrapper>
    </FooterWrapper>
);

export default Footer;
