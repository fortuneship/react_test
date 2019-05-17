import React from 'react';

const WhatWeDo = () => {
    return(
        <section id="what" className="bg-light py-1">
    <div className="container">
      <h2 className="m-heading text-center"><span className="text-primary">What</span> We Do</h2>
      <div className="items">
        <div className="item">
          <i className="fas fa-university fa-2x"></i>
          <div>
            <h3>Investment Banking</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum!</p>
          </div>
        </div>
        <div className="item">
            <i className="fas fa-book-reader fa-2x"></i>
            <div>
              <h3>Portfolio Management</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum!</p>
            </div>
        </div>
        <div className="item">
            <i className="fas fa-pencil-alt fa-2x"></i>
            <div>
              <h3>Tax & Custodial</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum!</p>
            </div>
        </div>
      </div>
    </div>
  </section>
    );
}

export default WhatWeDo;