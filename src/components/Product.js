import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Product extends Component {
  constructor(props) {
    super(props);
  }

  addToCart = () => {
    const {products} = this.props;
    let product = products[0];
//console.log(products, product)
    let cart = JSON.parse(localStorage.getItem('cart'));
   
    if (cart == null) cart = [];
    let foundIndex = cart.findIndex((p) => p.id === product.id);
    if (foundIndex == -1) {
      cart.push({id: product.id, name: product.title, img: product.image, price: product.price, qty: 1})
    }
    else 
    cart[foundIndex].qty++;
    localStorage.setItem('cart', JSON.stringify(cart));
    let total = cart.reduce((prev, p) => prev+ p.qty, 0)
    document.querySelector('#cart-count').innerHTML= total; 
    window.scrollTo(0,0);
  }
    render() {
        const productItems = this.props.products.map((product, index) => (
            <div key={index} className="part-sec col-4">
              <a href="single.html">
                <img src={product.image} alt={product.title} />
              </a>
              <div className="part-info">
                <a href="/">
                  <h5>
                    {product.title}
                    <span className="product-price">${product.price}</span>
                  </h5>
                </a>
                <Link className="add-cart" to={"/detail/"+ product.id}>
                  Quick View
                </Link>
                {/* <span>Rate: {product.rating.rate}</span>  */}
                <div className="sold-items">Sold Items: {product.rating.count}</div>
                <a className="qck" href="javacript: void()" onClick={this.addToCart}>
                  Add to cart
                </a>
              </div>
            </div>
          ))
        return (
            <div className="bike-apparels ">
                {productItems}
                <div className="clearfix" />
              </div>
        )
    }
}
