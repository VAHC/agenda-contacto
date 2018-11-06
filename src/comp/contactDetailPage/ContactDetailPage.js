import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from './comp/contactForm/ContactForm';
import queryString from 'query-string';
import './contactDetailPage.css';

class ContactDetailPage extends React.Component {
  render() {
    const params = queryString.parse(this.props.history.location.search);
    return(
      <div>
        <h2>Contact detail</h2>
        <ContactForm contactId={ params.contactId } />
      </div>
    )
  }
}

ContactDetailPage.propTypes = {
  history: PropTypes.object.isRequired
};

export default ContactDetailPage;
