import React from 'react'
import classes from './index.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleMinus, faCirclePlus} from '@fortawesome/free-solid-svg-icons'


export default function Counter(props) {
    const addButtonHandler = () => {
        props.onAdd(props.meal)
    }
    return (
        <div className={classes.Counter}>
            {
                (props.meal.amount && props.meal.amount > 0) ? (
                    <>
                        <button className={classes.Sub}><FontAwesomeIcon  icon={faCircleMinus} /></button>
                        <span className={classes.Count}>{props.meal.amount}</span>
                    </>
                ) : null
            }

            <button onClick={addButtonHandler} className={classes.Add}><FontAwesomeIcon  icon={faCirclePlus} /></button>
        </div>
    )
}
