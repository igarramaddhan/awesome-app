import React from 'react';
import './layout.css';

const Layout = (props) => {
  return (
    <div className='layout-container'>
      <div className='layout-header'>
        {props.header}
      </div>
      <div className='content-container'>
        {props.children}
      </div>
    </div>
  );
}

export default Layout;