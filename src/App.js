import React from 'react';
import { BrowserRouter , Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Index from "./Components/Index";


import './App.css';



class App extends React.Component{

  render() {
    
    return (
      <BrowserRouter>
        <Navbar />
        
        <Route exact path="/" component={Index} />
        <Route path="/contact" component={Contact} />

      </BrowserRouter>
    );
  }
}


export default App;
