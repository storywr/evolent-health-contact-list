import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { fetchContacts } from  './actions/contacts.js'
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {

  componentDidMount() {
    if (this.props.contacts.length === 0) {
      this.props.actions.fetchContacts()
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#"><Link to="/">Evolent Health</Link></a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#"><Link to="/contacts">Contact List</Link></NavItem>
            <NavItem eventKey={2} href="#"><Link to="/contacts/new">Add Contact</Link></NavItem>
          </Nav>
        </Navbar>
        { this.props.children }
      </div>
    );
  }
}

function mapStateToProps(state){
  return {contacts: state.contacts}
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({ fetchContacts}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
