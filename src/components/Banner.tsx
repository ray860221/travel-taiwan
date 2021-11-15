import React,{useState} from 'react';
import styled from 'styled-components';
import attractionsBanner from '../assets/images/attractions_banner.png';
import restaurantsBanner from '../assets/images/restaurants_banner.png';
import accommodationsBanner from '../assets/images/accommodations_banner.png';
import activitiesBanner from '../assets/images/activities_banner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faUtensils, faHome, faPalette, faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div<{bg: string}>`
    height: 400px;
    background-image: url(${props=>props.bg});
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
const NavBtn = styled.div<{active: boolean}>`
    display: flex;
    align-items: center;
    padding: 14px 24px;
    margin-right: 12px;
    background: ${props=>props.active?'#B72323':'#ffffff'};
    border-radius: 24px;
    color: ${props=>props.active?'#FFFFFF':'#959595'};
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

type navType = 'attractions' | 'restaurants' | 'accommodations' | 'activities';

const Banner= () => {
    const [nav, setNav] = useState<navType>('attractions')

    const getBanner = () => {
        if (nav === 'attractions') 
            return attractionsBanner;
        else if (nav === 'restaurants') 
            return restaurantsBanner;
        else if (nav === 'accommodations')
            return accommodationsBanner;
        else
            return activitiesBanner;
    }
    const getTitle = () => {
        if (nav === 'attractions') 
            return '景點';
        else if (nav === 'restaurants') 
            return '餐飲';
        else if (nav === 'accommodations')
            return '旅宿';
        else
            return '活動';
    }

    return (
        <Container bg={getBanner()}>
            <Content>
                <Title>{getTitle()}</Title>
                <Nav>
                    <NavBtn active={nav==='attractions'} onClick={()=>setNav('attractions')}>
                        <NavBtnText>景點</NavBtnText>
                        <FontAwesomeIcon icon={faCamera} />
                    </NavBtn>
                    <NavBtn active={nav==='restaurants'} onClick={()=>setNav('restaurants')}>
                        <NavBtnText>餐飲</NavBtnText>
                        <FontAwesomeIcon icon={faUtensils} />
                    </NavBtn>
                    <NavBtn active={nav==='accommodations'} onClick={()=>setNav('accommodations')}>
                        <NavBtnText>旅宿</NavBtnText>
                        <FontAwesomeIcon icon={faHome} />
                    </NavBtn>
                    <NavBtn active={nav==='activities'} onClick={()=>setNav('activities')}>
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
