/**
 * @author Paul M
 * Contact Page
 */

//Imports
import React from 'react';
import styled from 'styled-components';

import Form from '../components/Form';
import Button from '../components/Button';

/**
 * Create styled component for more 
 * customized styles in Contact Page Layout  
 */ 
const OuterForm = styled.div`
  clear: both;
  width: 100%;
  height: 600px;
  max-width: 450px;
  margin: auto;
  margin-top: 40px;
`;

/**
 * Build a component: Contact class 
 */
class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      phone: '',
      message: '', 
      result: ''
    }
  }

    /**
     * nameInputRecord method 
     * To manage name inputs and its state
     * @param e refers to event handler
     */ 
    nameInputRecord = e => {
      this.setState({
        name: e.target.value
      });
    }

    /**
     * phoneInputRecord method
     * To manage phone number inputs and its state
     * @param e refers to event handler
     */
    phoneInputRecord = e => {
        this.setState({
          phone: e.target.value
        });
      }

    /**
     * messageInputRecord method
     * To manage message field inputs
     *  @param e refers to event handler
     */
    messageInputRecord = e => {
      this.setState({
        message: e.target.value
      });
    }

    /**
     * submitRecord method 
     * to store name, phone, message in one object
     * @param null
     */
    submitRecord = () => {
      const { name, phone, message } = this.state;
      this.display(name, phone);
      console.log({
        name,
        phone,
        message
      });
    }
  

    /**
     * Display message
     * @returns null
     */
    display = (name, phone) => {
      let result ='';
      if( name !== null && phone !== null ){
        setTimeout(() => {
          result = 'Thanks for your feedback.';
          document.getElementById("result").textContent = result;
         } , 3000);        
      } else {
        setTimeout(() => {
         result = 'Atleast one of the fields is missing.';
         document.getElementById("result").textContent = result;
        } , 3000);     
      }
    }
  
  /**
   * render method
   * Set up input fields to control states of each inputs
   * @returns Form components
   */
  render() {
    const { name, phone, message } = this.state;
    return (
      <OuterForm>
        <Form  className="container-fluid">
          <p className="lead">Let us know how we can help serve you better</p>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={e => this.nameInputRecord(e)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Phone Number:</label>
            <input 
              type="number"
              id="number"
              className="form-control"
              value={phone}
              onChange={e => this.phoneInputRecord(e)}
              min="10"
              max="20"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea 
              name="message"
              id="message"
              className="form-control"
              rows="4"
              value={message}
              onChange={e => this.messageInputRecord(e)}
            ></textarea>
          </div>
          <div className="form-group">
            <Button color="webColor1" onClick={this.submitRecord}>Submit</Button>
            <br />
            <p id="result" onChange={this.submitRecord}></p>
          </div>
        </Form>
      </OuterForm>
    );
  }
}

export default Contact;