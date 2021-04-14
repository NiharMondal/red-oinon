import React from 'react';
import './Banner.css';
import { Grid } from '@material-ui/core';
import bannerPhoto from './bannerbackground.png'
import { Button, Form, FormControl } from 'react-bootstrap';
const Banner = () => {
   return (
      <Grid container>
         <Grid item md={12} sm={12} xs={12}>
            <div className="search_box">
               <div className="input_box">
                  <input type="text"
                     placeholder="Search food items" />
                  <button>Search</button>
               </div>
            </div>
         </Grid>
      </Grid>
   );
};

export default Banner;