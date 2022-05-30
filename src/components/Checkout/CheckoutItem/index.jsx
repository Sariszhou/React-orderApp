import React from 'react'
import Counter from '../../UI/Counter'
import classes from './index.module.css'
export default function CheckoutItem(props) {
  return (
    <div className={classes.CheckoutItem}>
        <div className={classes.MealImg}>
            <img src={props.meal.img} alt=''/>
        </div>
        <div className={classes.Desc}>
            <h2 className={classes.Title}>{props.meal.title}</h2>
            <div className={classes.PriceOuter}>
                <div>
                    <Counter meal={props.meal}></Counter>
                </div>
                <div className={classes.Price}>
                    {props.meal.price*props.meal.amount}
                </div>
            </div>
        </div>
    </div>
  )
}
