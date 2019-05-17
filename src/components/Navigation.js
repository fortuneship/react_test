import React, { Component } from 'react'

class Navigation extends Component {
  render() {
    return (
    <nav id="navbar">
    <h1 class="logo">
      <span class="text-primary">
        <i class="fas fa-book-open"></i> Edge</span>Ledger
    </h1>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#what">What</a></li>
      <li><a href="#who">Who</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
  
    );
  }
}

export default Navigation;
