import React from 'react';
import styled from 'styled-components';

const SocialMediaButton = styled.button`
    background: 0 none;
    border: 0 none;
    padding: 0;
    outline: 0 none;
    cursor: pointer;
    transform: translateY(0);
    transition: transform .3s ease-in;

    img {
        width: 40px;
        height: 40px;
        padding: 5px;
    }

    &:hover {
        transform: translateY(-5px);
    }
`;

const SocialMediaIcon = ({src}) => (
    <SocialMediaButton>
        <img src={src}></img>
    </SocialMediaButton>
);

export default SocialMediaIcon;