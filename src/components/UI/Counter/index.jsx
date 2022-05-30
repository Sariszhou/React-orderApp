import React, { useContext } from 'react'
import classes from './index.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleMinus, faCirclePlus} from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../../store/cart-context'


export default function Counter(props) {

    const ctx = useContext(CartContext)


    const addButtonHandler = () => {
        // props.onAdd(props.meal)
        // ctx.addItem(props.meal)
        ctx.cartDispatch({type:'ADD_ITEM', meal:props.meal}); // 添加食物
    }
    const subButtonHandler = () => {
        // props.onMinus(props.meal)
        // ctx.removeItem(props.meal)
        ctx.cartDispatch({type:'REMOVE_ITEM', meal:props.meal}); // 删除食物
    }
    return (
        <div className={classes.Counter}>
            {
                (props.meal.amount && props.meal.amount > 0) ? (
                    <>
                        <button onClick={subButtonHandler} className={classes.Sub}><FontAwesomeIcon  icon={faCircleMinus} /></button>
                        <span className={classes.Count}>{props.meal.amount}</span>
                    </>
                ) : null
            }

            <button onClick={addButtonHandler} className={classes.Add}><FontAwesomeIcon  icon={faCirclePlus} /></button>
        </div>
    )
}
