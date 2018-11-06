import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ContactListItem from './comp/contactListItem/ContactListItem';

const ContactList = ({ contacts, history }) => {
  // caso en donde se manda un state.
  // const handleContactClick = contact => {
  //   history.push('/contact-detail', { contact });
  // };

  //caso en el que se manda una query

  const handleContactClick = contact => {
    history.push(`/contact-detail?contactId=${ contact.id }`);
  };


  return (
    <div className={ 'contact-list' }>
      { contacts.map(contact => <ContactListItem key={ contact.id } contact={ contact } onEdit={ handleContactClick } /> ) }
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(ContactList);
