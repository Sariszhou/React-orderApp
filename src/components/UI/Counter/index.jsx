import React from 'react'
import classes from './index.module.css'

export default function Counter() {
  return (
    <div>
        <button className={classes.Sub}>-</button>
        <span>2</span>
        <button className={classes.Add}>+</button>
    </div>
  )
}
