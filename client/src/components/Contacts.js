import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { PageHeader } from 'react-bootstrap';

class Contacts extends Component {

  render() {

    return (
      <div>
        <PageHeader>Contact List</PageHeader>
        <div className="contacts">
            {this.props.contacts.map(contact =>
            <h2>{contact.first_name} {contact.last_name}</h2>
            )}
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps)(Contacts);
