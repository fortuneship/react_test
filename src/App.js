import React, { Component } from 'react';
// import Navigation from './components/Navigation';
 import Header from './components/Header';
 import Showcase from './components/Showcase';
 import WhatWeDo from './components/WhatWeDo';
 import WhoWeAre from './components/WhoWeAre';
//  import Customers from './components/Customers';
 import Contact from './components/Contact';
 import Footer from './components/Footer';
 //import ContactList from './components/ContactList';


import './App.css';


class App extends Component {
 
  render() {
    return (
        <div className="App">
         <Header />
         <Showcase />
         <WhatWeDo />
         <WhoWeAre />
         {/* <Customers /> */}
         <Contact />
         <Footer />
         
        
        </div>
     
    );
  }
}

export default App;
