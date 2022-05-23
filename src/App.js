import React from 'react'
import FoodList from './components/FoodList'
import {useState} from 'react'

const FoodData = [
  {
    id:'01',
    title:'麦香鸡腿堡',
    desc:'百分百纯牛肉与香软芝士融为一体配合美味番茄丰富口感',
    price:12,
    img:'/imgs/meals/1.png'
  },
  {
    id:'02',
    title:'吉斯汉堡',
    desc:'百分百纯牛肉与香软芝士融为一体配合美味番茄丰富口感',
    price:22,
    img:'/imgs/meals/2.png'
  },
  {
    id:'03',
    title:'鳕鱼汉堡',
    desc:'百分百纯牛肉与香软芝士融为一体配合美味番茄丰富口感',
    price:22,
    img:'/imgs/meals/3.png'
  },
  {
    id:'04',
    title:'板烧鸡腿汉堡',
    desc:'百分百纯牛肉与香软芝士融为一体配合美味番茄丰富口感',
    price:18,
    img:'/imgs/meals/4.png'
  },
  {
    id:'05',
    title:'巨无霸',
    desc:'百分百纯牛肉与香软芝士融为一体配合美味番茄丰富口感',
    price:18,
    img:'/imgs/meals/5.png'
  },
  {
    id:'06',
    title:'爽脆鸡腿堡',
    desc:'百分百纯牛肉与香软芝士融为一体配合美味番茄丰富口感',
    price:18,
    img:'/imgs/meals/6.png'
  },
  {
    id:'07',
    title:'迷你鸡腿堡',
    desc:'百分百纯牛肉与香软芝士融为一体配合美味番茄丰富口感',
    price:13,
    img:'/imgs/meals/7.png'
  },
]

export default function App() {
  const [MealsData, setMealsData] = useState(FoodData)
  // 创建一个state，用来存储购物车的数据
  // 1.商品【】 items
  // 2.商品总数 totalAmount
  // 3.商品总价 totalPrice
  const [cartData, setCartData] = useState({
    items:[],
    totalAmount:0,
    totalPrice:0
  })
  // 向购物车中添加商品
  const addMealHandler = (meal) =>{
    // 对购物车进行赋值
    const newCart = {...cartData}
    // 向购物车添加商品
    if(newCart.items.indexOf(meal) === -1){
      newCart.items.push(meal)
       //修改商品数量
      meal.amount = 1
    }else{
      // 增加商品数量
      meal.amount += 1
    }

    newCart.totalAmount += 1
    newCart.totalPrice += meal.price  

    setCartData(newCart)
  }
  return (
    <div>
      <FoodList MealsData={MealsData} onAdd = {addMealHandler}/>
    </div>
  )
}
