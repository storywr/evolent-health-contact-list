export const fetchContacts = () => {
  return dispatch => {
    return fetch('/api/contacts')
      .then(response => response.json())
      .then(contacts => dispatch({ type: 'LOAD_CONTACTS_SUCCESS', contacts }))
      .catch(console.log)
  }
}

export function addContact(contact) {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ contact })
  };

  return dispatch => {
    return fetch('/api/contacts', request)
      .then(response => response.json())
      .then(contact => dispatch({ type: 'ADD_CONTACT', contact }))
      .catch(console.log)
  }
}

export function updateContact(contact) {
  const request = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ contact })
  };

  return dispatch => {
    return fetch('/api/contacts', request)
      .then(response => response.json())
      .then(contact => dispatch({ type: 'UPDATE_CONTACT', contact }))
      .catch(console.log)
  }
}

export function deleteContact(contact) {
  const request = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ contact })
  };

  return dispatch => {
    return fetch('/api/contacts', request)
      .then(response => response.json())
      .then(contact => dispatch({ type: 'DELETE_CONTACT', contact }))
      .catch(console.log)
  }
}
