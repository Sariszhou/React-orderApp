import React from 'react'
import FoodDetail from '../FoodDetail'
import classes from './index.module.css'
export default function FoodList(props) {
  return (
    <>
        <div className={classes.FoodList}>
            {props.MealsData.map((item)=>
                <FoodDetail onAdd={props.onAdd} key={item.id} meal={item} tiltle={item.tiltle} desc={item.desc} price={item.price} img={item.img}/>
            )}
        </div>
    </>
  )
}
