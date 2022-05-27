import React from 'react';
import './App.css';
// import { useEffect } from 'react';
import Hero from "./components/Hero";
import About from './components/About';

  
// interface ContentProps {
//   text: string;
// }

// function Content({ text }: ContentProps) {
//   return <p>{text}</p>
// }

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
    </div>
  );
}

export default App;
