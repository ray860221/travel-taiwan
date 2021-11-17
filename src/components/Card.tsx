import React from 'react';
import styled from 'styled-components';
import Tag from './Tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import NoneImage from '../assets/images/NoneImage.png';


const Container = styled.div`
    flex: 0 0 calc((100% - 80px) / 4);
    background: #FFFFFF;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 12px;
    margin: 0 20px 32px 0;
    overflow: hidden;
`;
const CardImg = styled.div<{img: string}>`
    height: 190px;
    background: thistle;
    background-image: url(${props=>props.img});
    background-size: cover;
    background-position: center;
`;
const CardContent = styled.div`
    padding: 12px 16px 20px 16px;
`;
const CardTitle = styled.div`
    color: #2C2C2C;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 8px;
`;
const CardLocation = styled.div`
    color: #2A48FF;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 16px;
`;
const CardLocationText = styled.span`
    margin-left: 4px;
`;
const CardTag = styled.div`
    display: flex;
`;


interface props {
    title: string,
    location: string,
    tags: string[],
    img: string,
}
const Card = (props: props) => {
    return (
        <Container>
            <CardImg img={props.img?props.img:NoneImage}/>
            <CardContent>
                <CardTitle>{props.title}</CardTitle>
                <CardLocation>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <CardLocationText>{props.location}</CardLocationText>
                </CardLocation>
                <CardTag>
                    {props.tags.map((t)=><Tag key={t} text={t}/>)}
                </CardTag>
            </CardContent>
        </Container>
    );
}
export default Card;
