import React from 'react';
import styled from 'styled-components';

const SupportItem = styled.div`

`;

const SupportHeader = styled.div`

`;

const SupportText = styled.div`
`;

const SupportLineSeparator = styled.div`

`;

const SupportButton = styled.a`
    display: inline-block;
    font-size: 1.4rem;
    color: #FFF;
    text-decoration: none;
    padding: 1rem 1.5rem;
    text-transform: uppercase;
    background-color: #BB721E;
    border: 1px solid #BB721E;
    border-radius: 25px;
    transition: .25s all ease-out;

    &:hover {
        color: #BB721E;
        background-color: #FFF;
    }
`;

const SupportInnerWrapper = styled.div`
    color: #FFF;
    background-color: #E2A500;
`;

const SupportWrapper = styled.div`

`;

const Support = () => (
    <SupportWrapper>
        <SupportInnerWrapper>
            <SupportItem>
                <SupportHeader>
                    <h3>
                        Support
                    </h3>
                </SupportHeader>
                <SupportLineSeparator>

                </SupportLineSeparator>
                <SupportText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus, lacus id imperdiet pharetra, est nisi gravida nisl, quis aliquam lectus dui quis quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sollicitudin mollis mi, sed hendrerit nisi interdum et. Sed sed commodo felis. Praesent in sagittis neque, eget sollicitudin augue.
                </SupportText>
            </SupportItem>
            <SupportButton href='https://sioz.softnet.com.pl' target='_blank'>
                Skontaktuj się z Nami!
            </SupportButton>
        </SupportInnerWrapper>
    </SupportWrapper>
);

export default Support;