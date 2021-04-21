import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import {BiArrowBack} from 'react-icons/bi'
import './FoodDetails.css'
const FoodDetails = () => {
   const history = useHistory()
   const {foodKey} = useParams();
   const [getFood, setGetFood] = useState(null)
   const [addCart, setAddCart] = useState(1)
   const [progress, setProgress] = React.useState(0);
   useEffect(() => {
      async function getFoods() {
         try {
            const response = await axios.get(`http://localhost:4000/food-items/${foodKey}`)
            setGetFood(response.data)
         } catch (err) {
            console.error(err);
         }
      }
      getFoods()
   }, [foodKey]);
   const goBack = () => {
      history.push('/')
   }
   return (
      <>
         <section className="container">
            <Grid container
               justify="center"
               className="py-5">
               {
                  getFood ?
                     <>
                        <Grid
                           className="meal_wrapper"
                           item md={6} sm={6} xs={12}>
                           <div
                              className="meal_details p-1">
                              <div className="mb-4 back_btn">
                                 <button onClick={goBack}><BiArrowBack /></button>
                              </div>
                              <h2>{getFood && getFood.title}</h2>
                              <p className="mt-3">
                                 {getFood && getFood.description}
                              </p>
                              
                              <div className="price d-flex">
                                 <div className="pr-4">
                                    <h3>${getFood && getFood.price}</h3>
                                 </div>
                                 <div
                                    className="d-flex cart_function justify-content-around p-1">
                                    <button
                                       className="btn_active"
                                       onClick={() => setAddCart(addCart === 1 ? addCart : addCart - 1)}>
                                       <AiOutlineMinus
                                          className="react_btn" />
                                    </button>
                                    <h4
                                       className="mt-1">{addCart}</h4>
                                    <button
                                       className="btn_active active"
                                       onClick={() => setAddCart(addCart + 1)}>
                                       <AiOutlinePlus
                                          className="react_btn active" />
                                    </button>
                                 </div>
                              </div>
                              <button
                                 className="add_btn 
                                 mt-2">
                                 <FiShoppingCart />  Add</button>
                           </div>
                        </Grid>
                        <Grid
                           item md={6} sm={6} xs={12}
                           className="py-5 text-center"
                        >
                           <img
                              className="detail_img  px-2" src={getFood && getFood.img} alt="" />
                        </Grid>
                     </> : <CircularProgress disableShrink />
               }
            </Grid>
         </section>
      </>
   );
};

export default FoodDetails;