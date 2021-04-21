import React from 'react';
import Banner from '../Banner/Banner';
import Choseus from '../Choseus/Choseus';
import Food from '../Food/Food';
import Footer from '../Footer/Footer';



const Home = () => {
   return (
      <div>
         <Banner />
         <Food />
         <Choseus />
         <Footer/>
      </div>
   );
};

export default Home;