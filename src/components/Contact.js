import React, { Component } from 'react'
import ContactList from './ContactList';

class Contact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        message: '',
        users: []
    }

    onSubmit = (e) => {
       
        e.preventDefault();
        const { name, email, phone, message, users } = this.state
        const userDetail = {
          name,
          email,
          phone, 
          message
        }
        users.push(userDetail)

        // console.log(this.state);
        // this.setState({ name: '' });
        // this.setState({ email: '' });
        // this.setState({ phone: '' });
        // this.setState({ message: '' });
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
      const { name, email, phone, message } = this.state;
    return (
      <div>
        <section id="contact">
    <div className="contact-form bg-primary p-2">
      <h2 className="m-heading">Contact Us</h2>
      <p>Please use the form below to contact us</p>
      <div className="form-group">
         <label htmlFor="name">Name</label>
         <input type="text" name="name" placeholder="Enter Name..." value={name}
         onChange={this.onChange} 
         />
      </div>
      <form onSubmit={this.onSubmit}>
      <div className="form-group">
         <label htmlFor="email">Email</label>
         <input type="email" name="email" placeholder="Enter Email..."value={email}
         onChange={this.onChange}  />
      </div>
      <div className="form-group">
         <label htmlFor="phone">Phone</label>
         <input type="text" name="phone" placeholder="Enter Phone..."value={phone}
         onChange={this.onChange}  />
      </div>
      <div className="form-group">
         <label htmlFor="message">Message</label>
         <textarea type="text" name="message" placeholder="Enter Message..."value={message}
         onChange={this.onChange}  />
      </div>
      <input type="submit" value="Send" className="btn btn-dark"/>
      </form>
     
    </div>
  
    
  </section>
    <ContactList users={this.state.users}/>
    </div>
    );
  }
}

export default Contact;
