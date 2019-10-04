import React from 'react';
import styled from 'styled-components';
import companyGoalItems from '../../shared/CompanyGoalItems';
import Icon from '../Icon/Icon';

const GoalItem = styled.div`
    flex: 1 0 30%;
    margin: 5px;
    text-align: center;

    > div {
        margin: 40px 0;
    }

    > div:first-child {
        margin: 0;
    }

    > div:last-child {
        margin: 0;
    }
`;

const GoalItemIcon = styled.figure`
    width: 50px;
    height: 50px;
    margin: 0 auto 40px;

    img {
        width: 100%;
        height: 100%;
    }
`;

const GoalItemTitle = styled.div`
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-size: 2.2rem;
`;

const GoalItemBody = styled.div`
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-size: 1.4rem;
`;

const GoalItemsWrapper = styled.div`
    max-width: 1100px;
    width: 95%;
    margin: 100px auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    ${({ theme }) => theme.mq.desktop_lt} {
        flex-direction: column;
    }
`;

const CompanyGoals = () => (
    <GoalItemsWrapper>
        {companyGoalItems.map(element => (
            <GoalItem key={element.id}>
                <GoalItemIcon>
                    <Icon src={element.icon} />
                </GoalItemIcon>
                <GoalItemTitle>
                    {element.title}
                </GoalItemTitle>
                <GoalItemBody>
                    {element.body}
                </GoalItemBody>
            </GoalItem>
        ))}
    </GoalItemsWrapper>
);

export default CompanyGoals;
