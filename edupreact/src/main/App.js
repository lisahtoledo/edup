import React from 'react';

import Routers from './Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import Head from './Header'
import Footer from './Footer'
import './style/app.css'

export default function App() {
  return (
    <Router>
      <Head />
      <Routers />
      <Footer />
    </Router>
  );
}

