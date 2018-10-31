import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './comp/contactListItem/ContactListItem';

const ContactList = ({ contacts }) => (
  <div className={ 'contact-list' }>
    { contacts.map(contact => <ContactListItem key={ contact.id } contact={ contact } /> ) }
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
