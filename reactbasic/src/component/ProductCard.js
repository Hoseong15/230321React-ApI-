import React from 'react'
import card from '../db/db.json'

const ProductCard = () => {
  return (
    <div>
      <div>
        {card.products.map((item , i)=> {
          return(
            <div className="card">
              <div className="card-list">
                <img src= {item.img} alt="" />
                <div className='best'>베스트셀러</div>
                <div className='product'>{item.title}</div>
                <div className='new'>남성신발</div>
                <div className='price'>{item.price}원</div>
              </div>
            </div>
          )
        })}
       
      </div>

      {/* <div className="card-list">
        <img src="https://static.nike.com/a/images/w_960,c_limit/d460c864-92d9-4d2c-a879-52beff89e3e1/image.jpg" alt="" />
        <h1 className='text'>나이키 에어맥스</h1>
        <button className='buy'>구매하기</button>
      </div> */}

    </div>
  )
}

export default ProductCard