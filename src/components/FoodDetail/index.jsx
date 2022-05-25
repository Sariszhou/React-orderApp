import React from 'react'
import Counter from '../UI/Counter'
import Classes from './index.module.css'

export default function FoodDetail(props) {
  return (
    <div className={Classes.FoodDetail}>
        <div className={Classes.ImgBox}>
            <img src={props.meal.img} alt="" />
        </div>
        <div className={Classes.DescBox}>
            <h2 className={Classes.Title}>{props.meal.title}</h2>
            {props.noDesc?null:<p className={Classes.Desc}>{props.meal.desc}</p>}
            <div className={Classes.PriceWrapper}>
                <span className={Classes.Price}>{props.meal.price}</span>
                <Counter meal={props.meal}/>
            </div>
        </div>
    </div>
  )
}
