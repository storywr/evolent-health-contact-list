export default function contactsReducer(state = [], action) {
  switch ( action.type ) {
    case 'LOAD_CONTACTS_SUCCESS':
      return action.contacts
    case 'UPDATE_CONTACT':
      const updatedContacts = state.map(contact => {
        if(contact.id === action.contact.id){
          return { ...contact, ...action.contact }
        }
        return contact
      })
      return updatedContacts
    case 'ADD_CONTACT':
      const contact = Object.assign({}, action.contact, { id: state.length + 1} );
      return [ ...state, contact ];
    case 'DELETE_CONTACT':
      const contacts = state.contacts.filter(contact => contact.id !== action.id);
      return Object.assign({}, state, { contacts });
    default:
      return state;
  }
}
