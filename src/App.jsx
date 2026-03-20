import React from 'react';
import KittenCursor from './components/KittenCursor';
import Hero from './components/Hero';
import About from './components/About';
import Product from './components/Product';
import MiniGame from './components/MiniGame';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <KittenCursor />
      <main>
        <Hero />
        <About />
        <Product />
        <MiniGame />
        <Contact />
      </main>
    </>
  );
}

export default App;
