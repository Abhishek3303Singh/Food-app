import React from 'react'
import { useSelector } from 'react-redux'
import { IMG_CDN_URL } from '../../config'
import './cart.css'

const Cart = () => {
  const {cartItems} = useSelector(store=>store.cart)
  console.log(cartItems)
  return (
    <div>
      <div className='cartMainContainer'>
        {
          cartItems?.map((item, key)=>(
            <div className="cartContainer">
              <img className='cartItemImg' src={IMG_CDN_URL + item.imageId} alt="" />
              <h3 className="cartItemName">{item.name}</h3>
              <h3 className="cartItemPrice">Price:{" "}{(item.price)/100}</h3>
            </div>
          ))
        }
        <div className="cartIemPriceContaner">
          
        </div>

      </div>
    </div>
  )
}

export default Cart