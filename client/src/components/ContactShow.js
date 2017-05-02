import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as ReactBootstrap from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import { fetchContacts } from  '../actions/contacts.js'
import { bindActionCreators } from 'redux';
import '../App.css'

class ContactShow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contact: props.contact
    };
  }

  render() {
    const contact = this.state.contact;

    return (
      <div>
        <PageHeader className="header1">{contact.first_name} {contact.last_name} <small>{contact.email}</small></PageHeader>
        <div className="contacts">
          <h3>Phone Number: {contact.phone_number}</h3>
          <h3>Status: {contact.status}</h3>
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
    actions: bindActionCreators({ fetchContacts }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactShow);
