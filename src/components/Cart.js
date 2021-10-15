import React, { useState } from 'react'

export default function Cart() {
  const [value, setValue] = useState('');
  //setValue(value)
  let cart = JSON.parse(localStorage.getItem('cart'));
    return (
        <div className="cart">
  <div className="container">
    <div className="cart-top">
      <a href="/">&lt;&lt; home</a>
    </div>	
    <div className="col-md-9 cart-items">
      <h2>My Shopping Bag ()</h2>
      <div className="cart-header">
        <div className="close1"> </div>

        {(cart != null) && 
        (cart.map((p) => 
        (<div className="cart-sec">
          <div className="cart-item cyc">
            <img src={p.img} alt={p.title}/>
          </div>
          <div className="cart-item-info">
            <h3>{p.name}</h3>
            <h6>Model No: 3578</h6>
            <h4><span> $ </span>{p.price}</h4>
            <p className="qty">Qty ::</p>
            <input min={1} type="number" value ={p.qty + value} id="quantity" name="quantity" defaultValue={1} className="form-control input-small" />
          </div>
          <div className="clearfix" />
          <div className="delivery">
            <p>Service Charges:: $ {1+ Math.round(0.01*p.price)}</p>
            <span>Delivered in 2-3 bussiness days</span>
            <div className="clearfix" />
          </div>	
          </div>
          )
        ))}
        					
        
      </div>
      
    </div>
    <div className="col-md-3 cart-total">
      <a className="continue" href="/">Continue to basket</a>
      <div className="price-details">
        <h3>Price Details</h3>
        <span>Total</span>
        {/* {
          cart.map(p => {
            // total = p.qty*p.price;
            // <span className="total">{total}</span>
          })
        } */}
        <span className="total">687676</span>
        <span>Discount</span>
        <span className="total">---</span>
        <span>Delivery Charges</span>
        <span className="total">150.00</span>
        <div className="clearfix" />				 
      </div>	
      <h4 className="last-price">TOTAL</h4>
      <span className="total final">6350.00</span>
      <div className="clearfix" />
      <a className="order" href="/">Place Order</a>
      <div className="total-item">
        <h3>OPTIONS</h3>
        <h4>COUPONS</h4>
        <a className="cpns" href="/">Apply Coupons</a>
        <p><a href="/">Log In</a> to use accounts - linked coupons</p>
      </div>
    </div>
  </div>
</div>

    )
}
