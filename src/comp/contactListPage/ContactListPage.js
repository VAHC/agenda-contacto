import React from 'react';
import './contactListPage.css';
import SearchableContactList from './comp/searchableContactList/SearchableContactList';
import Header from '../layout/Header';

class ContactListPage extends React.Component {
  render() {
    return (
      <div className={ 'contact-list-page' }>
        <Header title={'Contact List '} />
        <SearchableContactList />
      </div>
    )
  }
}

export default ContactListPage;
