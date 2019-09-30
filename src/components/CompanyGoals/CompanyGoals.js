import React from 'react';
import styled from 'styled-components';
import companyGoalItems from '../../shared/CompanyGoalItems';

const GoalItem = styled.div`
    flex: 1 0 30%;
    margin: 5px;
    text-align: center;
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
`;

const CompanyGoals = () => (
    <GoalItemsWrapper>
        {companyGoalItems.map(element => (
            <GoalItem key={element.id}>
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
