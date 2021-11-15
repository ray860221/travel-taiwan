import React from 'react';
import styled from 'styled-components';
import Card from './Card';



const Container = styled.div`
    padding: 52px 82px;
`;
const Title = styled.div`
    padding-left: 4px;
    border-left: 4px solid #2A48FF;
    color: #2C2C2C;
    font-size: 20px;
    line-height: 26px;
    font-weight: bold;
    margin-bottom: 24px;
`;
const ResultContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const mockData = {
    title: '大稻埕碼頭_大稻埕碼頭貨櫃市集',
    location: '臺北市',
    tags: ['遊憩類'],
};

const Content = () => {

    return (
        <Container>
            <Title>搜尋結果</Title>
            <ResultContent>
                {Array(20).fill(0).map((id)=>
                    <Card 
                        key={id}
                        title={mockData.title}
                        location={mockData.location}
                        tags={mockData.tags}
                    />
                )}
            </ResultContent>
        </Container>
    );
}

export default Content;
