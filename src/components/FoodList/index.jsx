import React from 'react'
import FoodDetail from '../FoodDetail'
import classes from './index.module.css'
export default function FoodList(props) {
  return (
    <>
        <div className={classes.FoodList}>
            {props.MealsData.map((item)=>
                <FoodDetail  key={item.id} meal={item}/>
            )}
        </div>
    </>
  )
}
