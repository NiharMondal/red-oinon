import React from 'react';
import Banner from '../Banner/Banner';
import Navheader from '../Header/Navheader';
import Main from '../Main/Main';

const Home = () => {
   return (
      <div>
         <Navheader />
         <Banner />
         <Main/>
      </div>
   );
};

export default Home;