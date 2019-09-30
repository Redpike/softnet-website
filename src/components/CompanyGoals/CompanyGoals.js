import React from 'react';
import styled from 'styled-components';
import companyGoalItems from '../../shared/CompanyGoalItems';

const GoalItem = styled.div`
    flex: 1 0 30%;
    margin: 5px;
    text-align: center;

    > div {
        margin: 30px 0;
    }

    > div:first-child {
        margin: 0 0 30px;
    }

    > div:last-child {
        margin: 30px 0 0;
    }
`;

const GoalItemIcon = styled.figure`

`;

const GoalItemTitle = styled.div`

`;

const GoalItemBody = styled.div`

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
                {/* <GoalItemIcon>
                    
                </GoalItemIcon> */}
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
