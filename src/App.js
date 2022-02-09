import React from 'react'
import About from './components/About';
import Card from './components/Card';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';


function App() {
  return (
    <div className='min-h-screen pt-10 bg-gray-100'>
      <Card/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
