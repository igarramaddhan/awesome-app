import React, { useState, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CartContext from './contexts/CartContext';
import Cart from './pages/Cart';

const initialState = { items: [], total: 0, totalPrice: 0 };

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'add': {
      console.log('adding');
      const items = [...state.items];
      let item = items.find(o => o.id === action.item.id);
      if (item) {
        item.count++;
        return {
          items,
          total: state.total + 1,
          totalPrice: state.totalPrice + action.item.price
        };
      }
      item = action.item;
      item.count = 1;
      items.push(item);
      return {
        items,
        total: state.total + 1,
        totalPrice: state.totalPrice + action.item.price
      };
    }
    case 'min': {
      console.log('removing');
      const items = [...state.items];
      let item = items.find(o => o.id === action.item.id);
      if (item) {
        if (item.count == 1) {
          items.splice(items.indexOf(item), 1);
          return {
            items,
            total: state.total - 1,
            totalPrice: state.totalPrice - action.item.price
          };
        }
        item.count--;
        return {
          items,
          total: state.total - 1,
          totalPrice: state.totalPrice - action.item.price
        };
      }
    }
    default:
      return state;
  }
}

function App() {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/product' component={ProductDetail} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
