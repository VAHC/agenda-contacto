import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = ({ contact, onEdit }) => {
  const handleContactClick = () => onEdit(contact);

  return (
    <div className={ 'contact-list-item'} onClick={ handleContactClick }>
      <div>{ `${ contact.lastName }, ${ contact.name }` }</div>
      <div>{ contact.email }</div>
    </div>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onEdit: PropTypes.func,
};

ContactListItem.defaultProps = {
  onEdit: () => null
};

export default ContactListItem;
