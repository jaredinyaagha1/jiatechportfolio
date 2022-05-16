import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './index.scss';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// const cool = require('cool-ascii-faces');
// const dotenv = require('dotenv');
// const express = require('express');
// const path = require('path');
// const PORT = process.env.PORT || 5000;
// express()
//     .use(express.static(path.join(__dirname, 'public')))
//     .set('views', path.join(__dirname, 'views'))
//     .set('view engine', 'ejs')
//     .get('/', (req, res) => res.render('pages/index'))
//     .get('/cool', (req, res) => res.send(cool()))
// .listen(PORT, () => console.log(`Listening on ${PORT}`));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
