import { Grid } from '@material-ui/core';
import React from 'react';
import './Footer.css'
import logo from '../../../images/logo.png'
const Footer = () => {
   return (
      <div
         className="footer_content py-3">
         <Grid container>
         <Grid item md={6} sm={6} xs={12} className="px-5">
            <img src={logo} alt=""/>
         </Grid>
         <Grid item md={3} sm={6} xs={12}>
            <ul>
               <li>About online food</li>
               <li>Read our blog</li>
               <li>Sign up to delivery</li>
               <li>Add your restaruant</li>
               <li></li>
            </ul>
         </Grid>
         <Grid item md={3} sm={6} xs={12}>
         <ul>
               <li>Get help</li>
               <li>Read FAQs</li>
               <li>View all clients</li>
               <li>Restaurants near me</li>
               <li></li>
            </ul>
         </Grid>
         </Grid>
         <Grid container className="footer">
            <Grid item md={9} className="px-5">
               <p>Copyright  { new Date().getFullYear()} Online food</p>
            </Grid>
            <Grid item md={1}>
               <div >
                  <p>Privacy Policy</p>
               </div>
            </Grid>
            <Grid item md={1} xs={6}>
            
               <div >
                  <p>Terms of use</p>
               </div>
               
            </Grid>
            <Grid item md={1} xs={6}>
            <div >
                  <p>Pricing</p>
               </div>
            </Grid>
            
         </Grid>
      </div>
   );
};

export default Footer;