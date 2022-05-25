import React, {useContext, useState } from 'react'
import classes from './index.module.css'
import CartContext from '../../store/cart-context'
import CartDetails from './CartDetails'

export default function ShopCart() {
    const ctx = useContext(CartContext)
    // 添加一个state 控制详情是否显示
    const [showDetails, setShowDetails] = useState(false)

    // 添加显示详情页函数
    const toggleDetailsHandler = ()=>{
        if(ctx.totalAmount === 0 ){
            setShowDetails(false)
        }
        setShowDetails((prevState)=> !prevState)
    }
    return (
        <div className={classes.Cart} onClick={toggleDetailsHandler}>
            {showDetails && <CartDetails></CartDetails>}
            <div className={classes.Icon}>
                <img src="/imgs/cart.png" alt='' />
                {ctx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>{ctx.totalAmount}</span>}
            </div>
            {ctx.totalAmount === 0 ? <p className={classes.NoMeal}>未选购商品</p> :  <p className={classes.Price}>{ctx.totalPrice}</p>}
            <button className={`${classes.Button} ${ctx.totalAmount === 0? classes.Disabled:''}`}>去结算</button>
        </div>
    )
}
