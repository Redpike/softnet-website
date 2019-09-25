import React from 'react';
import styled from 'styled-components';
import slider1 from '../../assets/images/slider1.jpg';

const ImageSliderWrapper = styled.div`
    width: 100vw;
    background-image: url(${slider1});
    background-size: 100%;
    backgroud-position: 50% 50%;
    background-repeat: no-repeat;
    padding-bottom: 32.5%;
`;

const ImageSliderTextWrapper = styled.div`

`;

const ImageSliderH2Text = styled.h2`

`;

const ImageSliderH3Text = styled.h3`

`;

const FrontSlider = () => (
    <ImageSliderWrapper>
        <ImageSliderTextWrapper>
            <ImageSliderH2Text>
                Lorem ipsum
            </ImageSliderH2Text>
            <ImageSliderH3Text>
                Neque porro quisquam est qui dolorem ipsum quia
            </ImageSliderH3Text>
        </ImageSliderTextWrapper>
    </ImageSliderWrapper>
);

export default FrontSlider;
