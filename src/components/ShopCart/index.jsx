import React, { useContext, useState } from 'react'
import classes from './index.module.css'
import CartContext from '../../store/cart-context'
import CartDetails from './CartDetails'
import Checkout from '../Checkout'

export default function ShopCart() {
    const ctx = useContext(CartContext)
    // 添加一个state 控制详情是否显示
    const [showDetails, setShowDetails] = useState(false)

    // 添加一个state 控制结账页的显示与隐藏
    const [showCheckout, setShowCheckout] = useState(false)
    // 添加显示详情页函数
    const toggleDetailsHandler = () => {
        if (ctx.totalAmount === 0)   {
            setShowDetails(false) 
            return
        };
        setShowDetails((prevState) => !prevState)
    }
    const showCheckoutHandler = ()=>{
        if(ctx.totalAmount===0) return;
        setShowCheckout(true)
    }
    const hideCheckoutHandler = ()=>{
        setShowCheckout(false)
    }
    // 在组件每次重新渲染的时候，检查一下商品的总数量，如果数量为0 则修改showDetails为false
    // 组件每次重新渲染 组件的函数体就会执行
    // 以下代码回报错
    // if(ctx.totalAmount === 0){
    //     setShowDetails(false)
    // }
    return (
        <div className={classes.Cart} onClick={toggleDetailsHandler}>
            {showCheckout && <Checkout onHide={hideCheckoutHandler} />}
            {showDetails && <CartDetails></CartDetails>}
            <div className={classes.Icon}>
                <img src="/imgs/cart.png" alt='' />
                {ctx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>{ctx.totalAmount}</span>}
            </div>
            {ctx.totalAmount === 0 ? <p className={classes.NoMeal}>未选购商品</p> : <p className={classes.Price}>{ctx.totalPrice}</p>}
            <button onClick={showCheckoutHandler}  className={`${classes.Button} ${ctx.totalAmount === 0 ? classes.Disabled : ''}`}>去结算</button>
        </div>
    )
}
