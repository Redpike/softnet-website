import React from 'react';
import styled from 'styled-components';
import secondaryMenuItems from '../../shared/SecondaryMenuItems';

const SecondaryMenuGroupHeader = styled.div`
    margin-bottom: 25px;
`;

const SecondaryMenuGroupItems = styled.div`

`;

const SecondaryMenuGroupItem = styled.div`

`;

const SecondaryMenuGroup = styled.div`

`;

const SecondaryMenuWrapper = styled.div`
    display: flex;
    flex-direction: row;

    > div {
        margin-right: 100px;
    }

    > div:last-child {
        margin: 0;
    }

    h4, h5 {
        margin: 0;
    }

    h4 {
        font-size: 2rem;
    }

    h5 {
        font-size: 1.6rem;
        line-height: 2.8rem;
    }

    ${({theme}) => theme.mq.desktop_lt} {
        flex-direction: column;
        text-align: center;

        > div {
            margin: 0 0 50px;
        }

               
        > div:nth-child(2n) {
            background: rgba(206, 22, 40, .09) no-repeat center;
            padding: 50px 0;
        }
    }
`;

const SecondaryMenu = () => (
    <SecondaryMenuWrapper>
        {secondaryMenuItems.map(item => {
            if (item.links) {
                return (
                    <SecondaryMenuGroup key={item.header}>
                        <SecondaryMenuGroupHeader>
                            <h4>{item.header}</h4>
                        </SecondaryMenuGroupHeader>
                        <SecondaryMenuGroupItems>
                            {item.links.map(link => (
                                <SecondaryMenuGroupItem key={link.caption}>
                                    <h5>{link.caption}</h5>
                                </SecondaryMenuGroupItem>
                            ))}
                        </SecondaryMenuGroupItems>
                    </SecondaryMenuGroup>
                )
            }
        })}
    </SecondaryMenuWrapper>
);

export default SecondaryMenu;