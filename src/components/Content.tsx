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
`;

interface Props {
    result: any,
}

const Content = ({ result }: Props) => {

    return (
        <Container>
            <Title>搜尋結果</Title>
            <ResultContent>
                {result && result.map((item:any)=>
                    <Card 
                        key={item.ID}
                        title={item.Name}
                        location={item.Address}
                        tags={['遊憩類']}
                        img={item.Picture.PictureUrl1}
                    />
                )}
            </ResultContent>
        </Container>
    );
}

export default Content;
