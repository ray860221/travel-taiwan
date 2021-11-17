import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Content from './components/Content';
import { navType } from './types/navType';
import { scenicSpotGet, restaurantGet, hotelGet, activityGet} from './apis/tdxApi';

function App() {

  const [nav, setNav] = useState<navType>('attractions');
  const [result, setResult] = useState();

  useEffect(() => {
    let apiObject = undefined;

    if (nav === 'attractions') 
        apiObject = scenicSpotGet();
    else if (nav === 'restaurants') 
        apiObject = restaurantGet();
    else if (nav === 'accommodations')
        apiObject = hotelGet();
    else
        apiObject = activityGet();

    if (apiObject) apiObject.then(res=>setResult(res.data));
},[nav])

  return (
    <>
      <Banner nav={nav} setNav={(nav)=>setNav(nav)}/>
      <Content result={result}/>
    </>
  );
}

export default App;
