import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import { food_list } from '../../assets/assets'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = ({category}) => {
    const {food_display} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-diaplay'>
        <h2>Top dishes near you</h2>
        <div className="food-diaplay-list">
            {food_list.map((item,index)=>{
              if(category==="All" || category===item.category){
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />

              }
            })}
        </div>
      
    </div>
  )
}

export default FoodDisplay
