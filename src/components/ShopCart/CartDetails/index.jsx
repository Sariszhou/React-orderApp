import React, { useContext, useState } from 'react'
import Backdrop from '../../UI/Backdrop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import classes from './index.module.css'
import CartContext from '../../../store/cart-context'
import FoodDetail from '../../FoodDetail'
import Confirm from '../../UI/Confirm'

export default function CartDetails() {
    const ctx = useContext(CartContext)
    // 设置确认框的显示
    const [showConfirm,setShowConfirm] = useState(false)
    // 添加函数显示确认窗口
    const showConfirmHandler = ()=>{
        // console.log(123)
        setShowConfirm(true)
    }
    const cancelHandler = (e)=>{
        e.stopPropagation()
        setShowConfirm(false)
    }
    const okHandler = ()=>{
        // setShowConfirm(false)
        ctx.cartDispatch({type:'CLEAR_CART'}); // 清空购物车
    }

  return (
    <Backdrop >
        {showConfirm && <Confirm confirmText={'确认清空购物车吗'} onCancel={cancelHandler} onOk={okHandler}/>}
        <div className={classes.CartDetails} onClick={e=>e.stopPropagation()}>
            <header className={classes.Header}>
                <h2 className={classes.Title}>餐品详情</h2>
                <div onClick={showConfirmHandler} className={classes.Clear}>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    <span>清空购物车</span>
                </div>
            </header>
            <div className={classes.MealList}>
                {
                    ctx.items.map((item)=>
                        <FoodDetail noDesc key={item.id} meal={item}></FoodDetail>
                    )
                }
            </div>
        </div>
    </Backdrop>
  )
}
