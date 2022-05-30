import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import classes from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../store/cart-context'
import CheckoutItem from './CheckoutItem'
import Pay from '../Pay'

export default function Checkout(props) {
    const checkoutRoot = document.getElementById('checkout')
    const closeHandler = () => {
        props.onHide()
    }
    const ctx = useContext(CartContext)
    return ReactDOM.createPortal(<div className={classes.Checkout}>
        <div onClick={closeHandler} className={classes.Close}>
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
        </div>
        <div className={classes.MealsDesc}>
            <header className={classes.Header}>
                <h2 className={classes.Title}>餐品详情</h2>
            </header>
            <div className={classes.Meals}>
                {ctx.items.map(item => <CheckoutItem
                    key={item.id}
                    meal={item}></CheckoutItem>)}

            </div>
            <footer className={classes.Footer}>
                <p className={classes.TotalPrice}>{ctx.totalPrice}</p>
            </footer>
        </div>
        <Pay totalPrice={ctx.totalPrice}></Pay>

    </div>, checkoutRoot)
}
