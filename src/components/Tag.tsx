import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: #C8C8C8;
    border-radius: 4px;
    padding: 4px 8px;
`;
const CardTitle = styled.div`
    color: #707070;
    font-size: 14px;
    line-height: 20px;
`;



interface props {
    text: string,
}

const Tag = (props: props) => {
    return (
        <Container>
            <CardTitle>{props.text}</CardTitle>
        </Container>
      );
    }
export default Tag;
