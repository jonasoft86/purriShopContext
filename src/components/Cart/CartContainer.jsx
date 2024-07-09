import React from 'react'
import "./CartContainer.css"
import Item from './Item'
import Summary from './Summary'
import { useCart } from "../../context/CardContext";

const CartContainer = () => {
  const { cartItems , removeFromCart , addToCart , removeQuantity} = useCart();

  const handleRemove = (productId) =>{
    removeFromCart(productId)
  }

  const handleAdd = (product) =>{
    addToCart(product)
  }

  const handleRemoveQuantity = (productId) =>{
    removeQuantity(productId)
  }

  return (
    <div className='cart-wrapper'>
      <h2 className='section-title'>Shopping Cart</h2>
      <div className='cart-container'>
        {
          cartItems && cartItems.length>0 ? 
          <>
            <div className='cart-items'>
              { cartItems.map((item)=> (
                  <Item 
                    key={item.id} 
                    item={item} 
                    handleRemove={handleRemove} 
                    handleAdd={handleAdd} 
                    handleRemoveQuantity={handleRemoveQuantity}
                  />
              ))}
            </div>
          </>:
          <div className='no-item'>
            <p>No items in the cart</p>
          </div>
        }
          <Summary cartItems={cartItems} />
      </div>
    </div>
  )
}

export default CartContainer