import { Grid } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const FoodItem = ({ food }) => {
   const history = useHistory()
   const { title, img, price, subtitle, _id } = food;
   const handleFood = () => {
      history.push(`/food/${_id}`)
   }
   return (
      <Grid item md={4} sm={6} xs={12} className="mb-4">
         <div
            onClick={handleFood}
            className="single_item">
            <img src={img} alt="" />
            <h4> {title}</h4>
            <p>{subtitle}</p>
            <h5> $ {price}</h5>
         </div>
      </Grid>

   );
};

export default FoodItem;