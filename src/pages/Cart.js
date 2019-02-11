import React, { useState, useContext } from 'react';
import Layout from '../components/layout';
import CartContext from '../contexts/CartContext';
import { convert } from '../libs/service';
import './Cart.css';

function Cart(props) {
  const { cart, dispatch } = useContext(CartContext);
  return (
    <Layout
      header={
        <div className='header'>
          <h3>Cart</h3>
          <p className='cart'>{cart.total}</p>
        </div>
      }
    >
      {cart.items.length === 0 ? (
        <div className='no-items'>No Items</div>
      ) : (
        <>
          <ul className='list-container'>
            {cart.items.map((val, i) => {
              return (
                <li
                  key={val.id + val.name}
                  className='list-item'
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                  <p className='name'>{val.name}</p>
                  <div>
                    <p className='price'>Rp. {convert(val.price)}</p>
                    <div className='operator'>
                      <button
                        onClick={() => dispatch({ type: 'add', item: val })}
                      >
                        +
                      </button>
                      <div className='separator'>{val.count}</div>
                      <button
                        onClick={() => dispatch({ type: 'min', item: val })}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="total-accumulation">
            <p>Total</p>
            <p>Rp. {convert(cart.totalPrice)}</p>
          </div>
        </>
      )}
    </Layout>
  );
}

export default Cart;
