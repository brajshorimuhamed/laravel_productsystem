import React from 'react'
import './App.css'

import AppHeader from './components/AppHeader';
import AppHero from './components/AppHero';
import RegisterProduct from './components/RegisterProduct';
import ProductList from './components/ProductList';
import AppFooter from './components/AppFooter';

function App() {

  return (
    <div className='App'>
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <RegisterProduct />
        <ProductList />
      </main>
      <footer id='footer'>
        <AppFooter />
      </footer>
    </div>
  )
}

export default App
