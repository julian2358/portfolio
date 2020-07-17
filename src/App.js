import React, { createFactory } from 'react';
import './App.css';
import Home from './com/About'
import Contact from './com/contact'
import Container from './container';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
      
   <div>
   <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
     <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Grenze+Gotisch&family=Open+Sans:ital,wght@1,300&display=swap" rel="stylesheet"></link>
     <Container />
    
   </div>
   </Router>
  );
}

export default App;
