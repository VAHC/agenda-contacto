import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = ({ contact }) => (
  <div className={ 'contact-list-item'}>
    <div>{ `${ contact.lastName }, ${ contact.name }` }</div>
    <div>{ contact.email }</div>
  </div>
);

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactListItem;
