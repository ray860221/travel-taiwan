import React from 'react';
import styled from 'styled-components';
import bg from '../assets/images/scene_banner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faUtensils, faHome, faPalette, faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const Container = styled.div`
    height: 400px;
    background-image: url(${bg});
    background-size: cover;
`;
const Content = styled.div`
    padding: 128px 188px 0 188px;
`;
const Title = styled.div`
    line-height: 106px;
    font-size: 80px;
    font-weight: bold;
    color: #FFFFFF;
    text-shadow: 0px 3px 6px #00000029;
`;
const Nav = styled.div`
    display: flex;
    margin: 14px 0 16px 0;
`;
const NavBtn = styled.div`
    display: flex;
    align-items: center;
    padding: 14px 24px;
    margin-right: 12px;
    background: #ffffff;
    border-radius: 24px;
    color: #959595;
    cursor: pointer;
`;
const NavBtnText = styled.div`
    margin-right: 8px;
`;

const SearchBlock = styled.div`
    display: flex;
    align-items: center;
`;
const RegionInput = styled.input`
    flex: 1;
    padding: 20px;
    margin-right: 12px;
    outline: none;
    border: 0px;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 8px;
    font-size: 16px;
    color: #2C2C2C;
    font-family: Roboto;
    line-height: 20px;
    ::placeholder{
        color: #959595;
    }
`;
const RegionSelect = styled.div`
    flex: 1;
    padding: 20px;
    margin-right: 12px;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 8px;
    font-size: 16px;
    color: #959595;
    line-height: 20px;
    background: #FFFFFF;
    cursor: pointer;
`;
const RegionSelectText = styled.span`
    margin-left: 8px;
`;
const SearchBtn = styled.div`
    padding: 16px 50px;
    box-shadow: 0px 3px 6px #00000029;
    background: #B72323;
    border-radius: 8px;
    font-size: 20px;
    color: #FFFFFF;
    cursor: pointer;
`;
const SearchBtnText = styled.span`
    margin-left: 8px;
`;

const Banner= () => {
    return (
        <Container>
            <Content>
                <Title>景點</Title>
                <Nav>
                    <NavBtn>
                        <NavBtnText>景點</NavBtnText>
                        <FontAwesomeIcon icon={faCamera} />
                    </NavBtn>
                    <NavBtn>
                        <NavBtnText>餐飲</NavBtnText>
                        <FontAwesomeIcon icon={faUtensils} />
                    </NavBtn>
                    <NavBtn>
                        <NavBtnText>旅宿</NavBtnText>
                        <FontAwesomeIcon icon={faHome} />
                    </NavBtn>
                    <NavBtn>
                        <NavBtnText>活動</NavBtnText>
                        <FontAwesomeIcon icon={faPalette} />
                    </NavBtn>
                </Nav>
                <SearchBlock>
                    <RegionSelect>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <RegionSelectText>輸入想去的地區</RegionSelectText>
                        </RegionSelect>
                    <RegionInput placeholder="輸入景點名稱"/>
                    <SearchBtn>
                        <FontAwesomeIcon icon={faSearch} />
                        <SearchBtnText>搜尋</SearchBtnText>
                    </SearchBtn>
                </SearchBlock>
            </Content>
        </Container>
      );
    }
export default Banner;
