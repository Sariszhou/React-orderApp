import React from 'react'
import FoodDetail from '../FoodDetail'
import classes from './index.module.css'
export default function FoodList() {
  return (
    <>
        <div className={classes.FoodList}>
            <FoodDetail/>
            <FoodDetail/>
            <FoodDetail/>
            <FoodDetail/>
            <FoodDetail/>
            <FoodDetail/>
            <FoodDetail/>
            <FoodDetail/>
        </div>
    </>
  )
}
