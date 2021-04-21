import { Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContex } from '../../../App';
import './Food.css';
import FoodItem from './FoodItem';
const Food = () => {
   // const foodItems = foodItem;
   const { cart } = useContext(UserContex)
   const [selectedItem, setSelectedItem] = useState('lunch');
   const [disabled, setDisabled] = useState(true);
   const [item, setItem] = useState([]);
   const [food, setFood] = useState([]);

   //GET ALL FOOD FROM DATABASE
   useEffect(() => {
      async function getFoods() {
         try {
            const response = await axios.get('http://localhost:4000/food-items')
            setFood(response.data)
         } catch (err) {
            console.error(err);
         }
      }
      getFoods()
   }, []);
   
   //filter and show fooditem in UI
   useEffect(() => {
      const data = food.filter(item => item.catagories === selectedItem)
      setItem(data)
   }, [selectedItem, food]);
   
   //SET CART
   // useEffect(() => {
   //    if (cart.length > 0) {
   //       setDisabled(false)
   //    }
   // },[cart])
   return (
      <main className="py-4 container">
         <div className="path_wrapper ">
            <ul>
               <li>
                  <button
                  className={selectedItem === 'breakfast' ? 'btn btn-danger' : 'btn'}
                  onClick={()=>setSelectedItem('breakfast')}>Breakfast
                  </button>
               </li>
               <li>
               <button
                  className={selectedItem === 'lunch' ? 'btn btn-danger' : 'btn'}
                  onClick={()=>setSelectedItem('lunch')}>Lunch
                  </button>
               </li>
               <li>
               <button
                  className={selectedItem === 'dinner' ? 'btn btn-danger' : 'btn'}
                  onClick={()=>setSelectedItem('dinner')}>Dinner
                  </button>
               </li>
               
            </ul>
         </div>
         <Grid container
            spacing={3}
            justify="space-around">
            
               {
               item.map(fd => <FoodItem food={fd} key={ fd._id}/>)
               }
            <button
               className={disabled? "btn_disabled": "btn btn-success"}
               disabled={disabled}>Checkout your food</button>
         </Grid>
      </main>
   );
};

export default Food;