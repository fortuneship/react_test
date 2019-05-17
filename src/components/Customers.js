import React from 'react';

const Customers = () => {
    return(
      <section id="customers" className="py-1">
    <div className="container">
      <h2 className="m-heading text-center">
        <span className="text-primary">Our</span> Customers
      </h2>
      {/* <div class="items py-1">
        <div><img src="./img/logos/logo1.png" alt="Customers"></div>
        <div><img src="./img/logos/logo2.png" alt="Customers"></div>
        <div><img src="./img/logos/logo3.png" alt="Customers"></div>
        <div><img src="./img/logos/logo4.png" alt="Customers"></div>
        <div><img src="./img/logos/logo5.png" alt="Customers"></div>
      </div> */}
      <div className="items py-1">
      <div><img src="./img/logos/logo1.png" alt="Customers"/></div>
      <div><img src="./img/logos/logo2.png" alt="Customers"/></div>
      <div><img src="./img/logos/logo3.png" alt="Customers"/></div>
      <div><img src="./img/logos/logo4.png" alt="Customers"/></div>
      <div><img src="./img/logos/logo5.png" alt="Customers"/></div>
      </div>
    </div>
  </section>
    );
}

export default Customers;
