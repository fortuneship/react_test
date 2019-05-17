import React from 'react';

const WhoWeAre = () => {
    return(
        <section id="who">
    <div className="who-img"></div>
    <div className="who-text bg-dark p-2">
      <h2 className="m-heading"><span className="text-primary">Who</span> We Are</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora culpa harum voluptas ratione enim consequuntur illo, atque, aut doloribus unde repellendus sit delectus beatae aspernatur placeat corrupti. Ipsa, itaque quas.</p>
      <h3>Our Team</h3>
      <ul className="list">
        <li>Mark Smith: CEO</li>
        <li>Shannon Johnson: CFO</li>
        <li>John Corbit: Lead Accountant</li>
        <li>Janet Williams: Investment Manager</li>
        <li>Kara Jackson: Senior Accountant</li>
      </ul>
    </div>
  </section>
    );
}

export default WhoWeAre;