import React from 'react';

import Home from "./../Home";
import About from "./../About";
import Footer from "./../Footer";
import Portfolio from "./../Portfolio";
import Profile from "./../Profile";
import SocialMedia from "./../SocialMedia";
import Work from "./../Work";





class Index extends React.Component{

  render() {
    
    return (
      <div>
              <Home />
              <Work />
              <Portfolio />
              <Profile />
              <About />
              <SocialMedia />
              <Footer />
      </div>
    );
  }
}


export default Index;
