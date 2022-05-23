import React from 'react'
import classes from './index.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleMinus, faCirclePlus} from '@fortawesome/free-solid-svg-icons'


export default function Counter(props) {
    return (
        <div className={classes.Counter}>
            {
                (props.amount && props.amount > 0) ? (
                    <>
                        <button className={classes.Sub}><FontAwesomeIcon  icon={faCircleMinus} /></button>
                        <span className={classes.Count}>{props.amount}</span>
                    </>
                ) : null
            }

            <button className={classes.Add}><FontAwesomeIcon  icon={faCirclePlus} /></button>
        </div>
    )
}
