import React from 'react'
import Counter from '../UI/Counter'
import Classes from './index.module.css'

export default function FoodDetail() {
  return (
    <div className={Classes.FoodDetail}>
        <div className={Classes.ImgBox}>
            <img src="/imgs/meals/1.png" alt="" />
        </div>
        <div>
            <h2 className={Classes.Title}>汉堡包</h2>
            <p className={Classes.Desc}>百分百纯牛肉搭配爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！</p>
            <div className={Classes.PriceWrapper}>
                <span className={Classes.Price}>12</span>
                <Counter/>
            </div>
        </div>
    </div>
  )
}
