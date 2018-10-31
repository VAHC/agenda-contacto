import React from 'react';
import './contactListPage.css';
import SearchableContactList from './comp/searchableContactList/SearchableContactList';

class ContactListPage extends React.Component {
  render() {
    return (
      <div>
        <SearchableContactList />
      </div>
    )
  }
}

export default ContactListPage;
