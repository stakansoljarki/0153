import React from 'react';
import ReactDOM from 'react-dom/client';

import Profile from "./app/layout/Profile";

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Profile/>
  </React.StrictMode>
);
