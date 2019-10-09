import React from 'react';
import styled from 'styled-components';
import slider1 from '../../assets/images/slider1.jpg';

const ImageSliderWrapper = styled.div`
    width: 100%;
`;

const ImageSliderInnerWrapper = styled.div`
    width: 100%;
    height: 80vh;
    background: url(${slider1}) no-repeat center center fixed;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
`;

const ImageSliderDarkMask = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    background: rgba(22, 22, 22, .35);
`;

const ImageSliderTextWrapper = styled.div`
    max-width: 1100px;
    width: 95%;
    margin: 0 auto 30px;

    ${({ theme }) => theme.mq.desktop} {
        margin: 0 auto 60px;
    }
`;

const ImageSliderH2Text = styled.h2`
    color: #FFF;
`;

const ImageSliderH3Text = styled.h3`
    color: #FFF;
`;

const FrontSlider = () => (
    <ImageSliderWrapper>
        <ImageSliderInnerWrapper>
            <ImageSliderDarkMask>
                <ImageSliderTextWrapper>
                    <ImageSliderH2Text>
                        Lorem ipsum
                    </ImageSliderH2Text>
                    <ImageSliderH3Text>
                        Neque porro quisquam est qui dolorem ipsum quia
                    </ImageSliderH3Text>
                </ImageSliderTextWrapper>
            </ImageSliderDarkMask>
        </ImageSliderInnerWrapper>
    </ImageSliderWrapper>
);

export default FrontSlider;
