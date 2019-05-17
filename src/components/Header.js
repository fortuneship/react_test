import React from 'react';

const Header = () => {
    return(
        <nav id="navbar">
        <h1 className="logo">
          <span className="text-primary">
            <i className="fas fa-book-open"></i> Edge</span>Ledger
        </h1>
        {/* <ul style={uiStyle}>
          <li><a style={linkStyle} href="#home">Home</a></li>
          <li><a style={linkStyle} href="#what">What</a></li>
          <li><a style={linkStyle} href="#who">Who</a></li>
          <li><a style={linkStyle} href="#contact">Contact</a></li>
        </ul> */}
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#what">What</a></li>
          <li><a href="#who" onClick={e => console.log(e.target)}>Who</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav> 
    );
};

// const headerStyle = {
//     display: 'flex',
//     position: 'sticky',
//     top: '0',
//     background: '#333',
//     color: '#fff',
//     justifyContent: 'space-between',
//     zIndex: '1',
//     padding: '1rem'
// }

// const uiStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     listStyle: 'none'

// }

// const linkStyle = {
//     color: '#fff',
//     padding: '0.75rem',
//     margin: '0 0.25rem'
// }

// const linkStyle = {
//   background: '#93cb52',
//   borderRadius: '5px'
// }

// #navbar {
//     display: flex;
//     position: sticky;
//     top:0;
//     background: #333;
//     color: #fff;
//     justify-content: space-between;
//     z-index: 1;
//     padding: 1rem;
//   }
  
//   #navbar ul {
//     display: flex;
//     align-items: center;
//     list-style: none;
//   }
  
//   #navbar ul li a {
//     color: #fff;
//     padding: 0.75rem;
//     margin: 0 0.25rem;
//   }
  
//   #navbar ul li a:hover {
//     background: #93cb52;
//     border-radius: 5px;
//   }
  

export default Header;