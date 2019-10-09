import React from 'react';
import styled from 'styled-components';
import support from '../../assets/images/support.jpg';

const SupportItem = styled.div`
    flex: 0 0 60%;

    ${({ theme }) => theme.mq.desktop_lt } {
        margin-bottom: 50px;
    }
`;

const SupportHeader = styled.div`
    h2 {
        margin: 0;
        text-shadow: 0 4px 9px #000000;
    }
`;

const SupportText = styled.div`
    line-height: 1.5;
`;

const SupportLineSeparator = styled.div`
    content: '';
    border: 1px solid #FFFFFF;
    width: 75px;
    margin: 25px 0 50px;
    transition: width .25s ease-in;

    ${({ theme }) => theme.mq.desktop_lt } {
        margin: 25px auto 50px;
    }
`;

const SupportButtonWrapper = styled.div`
    flex: 0 0 40%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SupportButton = styled.a`
    display: inline-block;
    font-size: 1.4rem;
    letter-spacing: 1px;
    font-weight: 700;
    color: #FFFFFF;
    text-decoration: none;
    padding: 1.5rem 2rem;
    text-transform: uppercase;
    background-color: rgba(187, 114, 30, .6);
    border: 1px solid #BB721E;
    border-radius: 25px;
    transition: color .25s ease-out,
                background-color .25s ease-out .1s;

    &:hover {
        color: #BB721E;
        background-color: rgba(255, 255, 255, 1);
    }
`;

const SupportInnerWrapper = styled.div`
    max-width: 1100px;
    width: 95%;
    margin: 0 auto;
    padding: 80px 0;
    display: flex;
    flex-direction: row;

    ${({ theme }) => theme.mq.desktop_lt } {
        flex-direction: column;
        text-align: center;
    }
`;

const SupportGradientWrapper = styled.div`
    Width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgb(2, 0, 36);
    background: linear-gradient(180deg, rgba(2, 0, 36 , 0.01) 0%, rgba(187, 114, 30, 0.14) 35%, rgba(255, 203, 0, 0.01) 100%);
`;

const SupportWrapper = styled.div`
    color: #FFF;
    background: url(${support}) no-repeat center center;

    &:hover ${SupportLineSeparator} {
        width: 150px;
    }
`;

const Support = () => (
    <SupportWrapper>
        <SupportGradientWrapper>
            <SupportInnerWrapper>
                <SupportItem>
                    <SupportHeader>
                        <h2>
                            Support
                        </h2>
                    </SupportHeader>
                    <SupportLineSeparator>

                    </SupportLineSeparator>
                    <SupportText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus, lacus id imperdiet pharetra, est nisi gravida nisl, quis aliquam lectus dui quis quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sollicitudin mollis mi, sed hendrerit nisi interdum et. Sed sed commodo felis. Praesent in sagittis neque, eget sollicitudin augue.
                    </SupportText>
                </SupportItem>
                <SupportButtonWrapper>
                    <SupportButton href='https://sioz.softnet.com.pl' target='_blank'>
                        Skontaktuj się z Nami!
                    </SupportButton>
                </SupportButtonWrapper>
            </SupportInnerWrapper>
        </SupportGradientWrapper>
    </SupportWrapper>
);

export default Support;