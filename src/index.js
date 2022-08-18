import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import Routing  from './routing';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container)
root.render(<Routing/>)