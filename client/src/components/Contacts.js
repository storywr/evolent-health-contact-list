import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { PageHeader } from 'react-bootstrap';
import { fetchContacts } from  '../actions/contacts.js'

class Contacts extends Component {

  componentDidMount() {
    this.props.actions.fetchContacts();
  }

  render() {

    return (
      <div>
        <PageHeader className="header1">Contact List <small>Evolent Users</small></PageHeader>
        <div className="contacts">
            {this.props.contacts.map(contact =>
            <Link to={`/contacts/${contact.id}`}><h4>{contact.first_name} {contact.last_name}</h4></Link>
            )}
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ fetchContacts }, dispatch)
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
