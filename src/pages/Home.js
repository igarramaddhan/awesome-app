import React, { useState, useContext } from 'react';
import './Home.css';
import Layout from '../components/layout';
import CartContext from '../contexts/CartContext';
import { convert } from '../libs/service';

const items = [
  {
    id: 1,
    name: 'Tas Pria Chuy',
    price: 300000,
    description:
      'Tas Pria Chuy dibuat dengan bahan serat bulu kambing yang memiliki bau khas.'
  },
  {
    id: 2,
    name: 'Celana Chino',
    price: 400000,
    description: 'Celana Chino dibuat oleh orang jawa yang tinggal di china.'
  },
  {
    id: 3,
    name: 'Kemeja Segi 20',
    price: 500000,
    description:
      'Kemeja Segi 20 merupakan kemeja yang Saya sendiri tidak tahu bentuknya.'
  }
];

function App(props) {
  const { cart, dispatch } = useContext(CartContext);
  return (
    <Layout
      header={
        <div className='header'>
          <h3>Home</h3>
          <p className='cart' onClick={() => props.history.push('/cart')}>
            {cart.total}
          </p>
        </div>
      }
    >
      {items.length === 0 ? (
        <div className='no-items'>No Items</div>
      ) : (
        <ul className='list-container'>
          {items.map((val, i) => {
            return (
              <li
                key={val.id + val.name}
                className='list-item'
                style={{ animationDelay: `${i * 200}ms` }}
                onClick={() => props.history.push('/product', { item: val })}
              >
                <p className='name'>{val.name}</p>
                <p className='price'>Rp. {convert(val.price)}</p>
              </li>
            );
          })}
        </ul>
      )}
    </Layout>
  );
}

export default App;
