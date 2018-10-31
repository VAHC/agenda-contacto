import React from 'react';
import SearchContacts from './comp/searchContacts/SearchContacts';
import ContactList from './comp/contactList/ContactList';
import { contacts as importedContacts } from './contacts';

class SearchableContactList extends React.Component {
  state = {
    contacts: importedContacts
  };

  handleSearch = (searchCriteria) => this.setState({
    contacts: importedContacts.filter(contact => contact.name.includes(searchCriteria)).map(contact => ({ ...contact }))
  });

  render() {
    return (
      <div>
        <SearchContacts onSearch={ this.handleSearch } />
        <ContactList contacts={ this.state.contacts } />
      </div>
    );
  }
}

export default SearchableContactList;
