import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addContact } from '../actions/contacts';
import { fetchContacts } from '../actions/contacts';
import { browserHistory } from 'react-router';
import { PageHeader } from 'react-bootstrap';
import '../App.css'

class ContactsNew extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      status: true
    };
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.actions.addContact(this.state);
    this.props.actions.fetchContacts();
    browserHistory.push(`/`);
  }

  handleOnFirstNameChange(event) {
    this.setState({
      first_name: event.target.value
    });
  }

  handleOnLastNameChange(event) {
    this.setState({
      last_name: event.target.value
    });
  }

  handleOnEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleOnPhoneNumberChange(event) {
    this.setState({
      phone_number: event.target.value
    });
  }

  handleOnStatusChange(event) {
    this.setState({
      status: event.target.value
    });
  }

  render() {
    return (
      <div>
        <PageHeader className="header1">Add Contact</PageHeader>
        <form className="myForm" onSubmit={(event) => this.handleOnSubmit(event)} >
          <input
            type="text"
            placeholder="First Name"
            onChange={(event) => this.handleOnFirstNameChange(event)} /><br></br><br></br>
          <input
            type="text"
            placeholder="Last Name"
            onChange={(event) => this.handleOnLastNameChange(event)} /><br></br><br></br>
          <input
            type="text"
            placeholder="Email"
            onChange={(event) => this.handleOnEmailChange(event)} /><br></br><br></br>
          <input
            type="text"
            placeholder="Phone Number"
            onChange={(event) => this.handleOnPhoneNumberChange(event)} /><br></br><br></br>
          <p>Check if Active &nbsp;
          <input
            type="checkbox"
            onChange={(event) => this.handleOnStatusChange(event)} /><br></br><br></br>
          </p>
          <input
            type="submit"
            value="Add Contact" />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ addContact, fetchContacts }, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(ContactsNew);
