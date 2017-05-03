import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateContact } from '../actions/contacts';
import { fetchContacts } from '../actions/contacts';
import { browserHistory } from 'react-router';
import { PageHeader } from 'react-bootstrap';
import '../App.css'

class ContactsEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: props.contact.first_name,
      last_name: props.contact.last_name,
      email: props.contact.email,
      phone_number: props.contact.phone_number,
      status: props.contact.status,
      id: props.contact.id
    };
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.actions.updateContact(this.state);
    this.props.actions.fetchContacts();
    browserHistory.push(`/contacts`);
    this.props.actions.fetchContacts();
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
        <PageHeader className="header1">Update Contact</PageHeader>
        <form className="myForm" onSubmit={(event) => this.handleOnSubmit(event)} >
          <input
            type="text"
            placeholder={this.props.contact.first_name}
            onChange={(event) => this.handleOnFirstNameChange(event)} /><br></br><br></br>
          <input
            type="text"
            placeholder={this.props.contact.last_name}
            onChange={(event) => this.handleOnLastNameChange(event)} /><br></br><br></br>
          <input
            type="text"
            placeholder={this.props.contact.email}
            onChange={(event) => this.handleOnEmailChange(event)} /><br></br><br></br>
          <input
            type="text"
            placeholder={this.props.contact.phone_number}
            onChange={(event) => this.handleOnPhoneNumberChange(event)} /><br></br><br></br>
          <p>Active User? &nbsp;
          <input
            type="checkbox"
            onChange={(event) => this.handleOnStatusChange(event)} /><br></br><br></br>
          </p>
          <input
            type="submit"
            value="Update Contact" />
        </form>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    contact: state.contacts.find(contact => contact.id == ownProps.routeParams.id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ updateContact, fetchContacts }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsEdit);
