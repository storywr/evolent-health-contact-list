import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addContact } from '../actions/contacts';
import { fetchContacts } from '../actions/contacts';
import { browserHistory } from 'react-router';
import '../App.css'

class ContactsNew extends Component {

  render() {
    return (
      <div>
        <h3>Add a Contact</h3>
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
