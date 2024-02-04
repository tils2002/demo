import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Form from './Form';
import { Provider } from 'react-redux';
import Store from './Store';
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
  <Home/>
 </>
);
