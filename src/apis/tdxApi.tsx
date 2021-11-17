import axios from 'axios';
import jsSHA from 'jssha';

const getAuthorizationHeader = () => {
    const AppID = '32649214ff9a4ad49e00a37a85ac127e';
    const  AppKey = 'ASJunUq9Gbfb-HoKMou-Khzmqvg';
    const UTCString = new Date().toUTCString(); 
    const ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + UTCString);
    const HMAC = ShaObj.getHMAC('B64');
    const Authorization = 'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"';
    return { 'Authorization': Authorization, 'X-Date': UTCString }; 
};

const tdxRequest = axios.create({
    baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/',
    headers: getAuthorizationHeader(),
});

export const scenicSpotGet = () => tdxRequest.get('/ScenicSpot?$top=10&$format=JSON');
export const restaurantGet = () => tdxRequest.get('/Restaurant?$top=10&$format=JSON');
export const hotelGet = () => tdxRequest.get('/Hotel?$top=10&$format=JSON');
export const activityGet = () => tdxRequest.get('/Activity?$top=10&$format=JSON');

