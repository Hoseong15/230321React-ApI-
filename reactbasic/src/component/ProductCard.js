import React from 'react'
// import card from '../db/db.json'

const ProductCard = ({menu}) => {
  return (
    <div>
      <img src={menu?.img} alt=""  width={440}/>
      <div className='choice-item'>{menu.choice == true ? "베스트셀러" : ""}</div>
      <div>{menu.title}</div>
      <div>{menu.price}</div>
      <div>{menu.new == true ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard