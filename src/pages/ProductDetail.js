import React, { useContext } from 'react';
import Layout from '../components/layout';
import { Redirect } from 'react-router-dom';
import CartContext from '../contexts/CartContext';

function ProductDetail(props) {
  const { cart, dispatch } = useContext(CartContext);
  const state = props.location.state;
  if (!props.location.state) {
    return <Redirect to='/' />;
  }

  const item = state.item;
  return (
    <Layout
      header={
        <div className='header'>
          <h3>{item.name}</h3>
          <p className='cart' onClick={() => props.history.push('/cart')}>
            {cart.total}
          </p>
        </div>
      }
    >
      <p>{item.description}</p>
      <button
        style={{
          border: 'none',
          background: '#ff9900',
          cursor: 'pointer',
          padding: '8px 16px',
          color: 'white'
        }}
        onClick={() => dispatch({ type: 'add', item })}
      >
        Add to Cart
      </button>
    </Layout>
  );
}

export default ProductDetail;
