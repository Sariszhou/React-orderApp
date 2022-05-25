import React from 'react'
import ReactDOM from 'react-dom'
import classes from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Checkout(props) {
    const checkoutRoot = document.getElementById('checkout')
    const closeHandler = ()=>{
        props.onHide()
    }
    return ReactDOM.createPortal(<div className={classes.Checkout}>
        <div onClick={closeHandler} className={classes.Close}>
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
        </div>

    </div>, checkoutRoot)
}
