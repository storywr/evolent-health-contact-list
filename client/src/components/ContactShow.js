import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as ReactBootstrap from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import { deleteContact } from '../actions/contacts';
import { fetchContacts } from  '../actions/contacts.js'
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import '../App.css'

class ContactShow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contact: props.contact
    };
  }

  handleDeleteOnClick(event) {
    this.props.actions.deleteContact(this.state.contact)
    this.props.actions.fetchContacts()
    browserHistory.push(`/contacts`);
    this.props.actions.fetchContacts();
  }

  render() {
    const contact = this.state.contact;

    return (
      <div>
        <PageHeader className="header1">{contact.first_name} {contact.last_name} <small>{contact.email}</small></PageHeader>
        <div className="contacts">
          <h3>Phone Number: {contact.phone_number}</h3>
          <h3>Status: {contact.status}</h3><br></br>
          <button className="deleteButton" onClick={(event) => this.handleDeleteOnClick(event)} type="button">+</button>
          <Link to={`/contacts/${contact.id}/edit`}><h4>Edit</h4></Link>
        </div>
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
    actions: bindActionCreators({ deleteContact, fetchContacts }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactShow);
