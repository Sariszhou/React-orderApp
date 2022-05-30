import React from 'react'
import classes from './index.module.css'

export default function Pay(props) {
  return (
    <div className={classes.Pay}>
        <div className={classes.TotalPrice}>{props.totalPrice}</div>
        <button className={classes.Button}>去支付</button>
    </div>
  )
}
