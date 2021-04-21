import { Grid } from '@material-ui/core';
import React from 'react';
import food from '../../../images/architecture-building-city-2047397.png'
import man from '../../../images/adult-blur-blurred-background-687824.png'
import chef from '../../../images/chef-cook-food-33614.png';
import { AiFillCar } from 'react-icons/ai'
import { MdNotificationsActive } from 'react-icons/md';
import { FaCarSide } from 'react-icons/fa';
import {BsArrowRight} from 'react-icons/bs'
import './Choseus.css'
const Choseus = () => {
   return (
      <div >
         <section
            className="choseus_content container py-4">
            <div>
               <h2>Why you choose us</h2>
               <p>Barton waited twenty always repair in within we do. An delighted offending <br/> curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>
            </div>
            <Grid container
               spacing={2}
               justify="center"
            >
               
               <Grid item md={4} sm={6} xs={12}>
                  <div
                     className="choose_reason">
                     <img src={man} alt="" />
                     <div
                        className="d-flex py-2">
                        <div>
                           <AiFillCar className="icon"/>
                        </div>
                        <div className="px-2">
                           <h4>Fast Delevery</h4>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatum optio saepe quae exercitationem aliquam?</p>
                           <p className="see_more">See More <BsArrowRight
                              className="right_arrow" /></p>
                        </div>
                     </div>
                     
                  </div>
               </Grid>
               <Grid item md={4} sm={6} xs={12}>
                  <div
                     className="choose_reason">
                     <img src={chef} alt="" />
                     <div
                        className="d-flex py-2">
                        <div>
                           <MdNotificationsActive className="icon"/>
                        </div>
                        <div className="px-2">
                           <h4>Fast Delevery</h4>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatum optio saepe quae exercitationem aliquam?</p>
                           <p className="see_more">See More <BsArrowRight
                              className="right_arrow"/></p>
                        </div>
                     </div>
                  </div>
               </Grid>
               <Grid item md={4} sm={6} xs={12}>
                  <div
                     className="choose_reason">
                     <img src={food} alt="" />
                     <div
                        className="d-flex py-2">
                        <div className="ml-1">
                           <FaCarSide className="icon"/>
                        </div>
                        <div className="px-2">
                           <h4>Fast Delevery</h4>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatum optio saepe quae exercitationem aliquam?</p>
                           <p className="see_more">See More <BsArrowRight
                              className="right_arrow" /></p>
                        </div>
                     </div>
                  </div>
               </Grid>

            </Grid>
         </section>
      </div>
   );
};

export default Choseus;