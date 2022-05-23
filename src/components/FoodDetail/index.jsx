import React from 'react'
import Counter from '../UI/Counter'
import Classes from './index.module.css'

export default function FoodDetail(props) {
  return (
    <div className={Classes.FoodDetail}>
        <div className={Classes.ImgBox}>
            <img src={props.img} alt="" />
        </div>
        <div>
            <h2 className={Classes.Title}>{props.title}</h2>
            <p className={Classes.Desc}>{props.desc}</p>
            <div className={Classes.PriceWrapper}>
                <span className={Classes.Price}>{props.price}</span>
                <Counter amount={2}/>
            </div>
        </div>
    </div>
  )
}
