import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon/Icon';
import companyGoalItems from '../../shared/CompanyGoalItems';

const CompanyGoalsWrapper = styled.div`
    width: 100%;
    padding: 150px 0;
`;

const CompanyGoalsHeaderWrapper = styled.div`
    max-width: 1100px;
    width: 95%;
    margin: 0 auto;
    text-align: center;
`;

const CompanyGoalsHeader = styled.div`
    font-family: ${({theme}) => theme.font.family.darkerGrotesque};
    font-size: ${({theme}) => theme.font.size.m};
    font-weight: 700;
`;

const CompanyGoalsHeaderSeparator = styled.div`
    content: '';
    width: 75px;
    margin: 50px auto;
    border-top: 1px solid #000000;
`;

const CompanyGoalsSubheader = styled.div`

`;

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

    ${({theme}) => theme.mq.desktop_lt} {
        margin: 50px 0;
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
    margin: 100px auto 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    ${({ theme }) => theme.mq.desktop_lt} {
        flex-direction: column;
    }
`;

const CompanyGoals = () => (
    <CompanyGoalsWrapper>
        <CompanyGoalsHeaderWrapper>
            <CompanyGoalsHeader>
                Systemy projektowane dla Twojego biznesu
            </CompanyGoalsHeader>
            <CompanyGoalsHeaderSeparator />
            <CompanyGoalsSubheader>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a sodales quam.
            </CompanyGoalsSubheader>
        </CompanyGoalsHeaderWrapper>
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
    </CompanyGoalsWrapper>
);

export default CompanyGoals;
