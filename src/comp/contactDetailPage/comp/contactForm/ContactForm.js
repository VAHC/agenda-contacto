import React from 'react';
import PropTypes from 'prop-types';
import { contacts } from '../../../contactListPage/comp/searchableContactList/contacts';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    const contact = contacts.find(contact => contact.id === props.contactId);
    const { name, lastName, email } = contact;
    this.state = {
      name,
      lastName,
      email
    };
  }

  handleInputChange = ev => this.setState({ [ev.target.name]: ev.target.value });

  handleFormSubmit = ev => {
    ev.preventDefault();
    console.log('Save');
  };

  render() {
    const { name, lastName, email } = this.state;
    return(
      <Card>
        <div className={ 'contact-form' }>
          <form onSubmit={ this.handleFormSubmit } autoComplete={ 'offfff' }>
            <TextField value={ name } onChange={ this.handleInputChange } name={ 'name' } label={ 'Nombre' } fullWidth />
            <TextField value={ lastName } onChange={ this.handleInputChange } name={ 'lastName' } label={ 'Apellido' } fullWidth />
            {/*<label>Name: <input name={ 'name' } onChange={ this.handleInputChange } value={ name } /></label>*/}
            <label>Email: <input name={ 'email' }  onChange={ this.handleInputChange } value={ email }/></label>
            <input type="submit" value={ 'Save' } />
          </form>
        </div>
      </Card>
    )
  }
}

ContactForm.propTypes = {
  contactId: PropTypes.string
};

export default ContactForm;


// class ContactForm extends React.Component {
//   constructor(props) {
//     super(props);
//     const { name, lastName, email } = props.contact;
//     this.state = {
//       name,
//       lastName,
//       email
//     };
//   }
//
//   handleInputChange = ev => this.setState({ [ev.target.name]: ev.target.value });
//
//   handleFormSubmit = ev => {
//     ev.preventDefault();
//     console.log('Save');
//   };
//
//   render() {
//     const { name, lastName, email } = this.state;
//     return(
//       <div className={ 'contact-form' }>
//         <form onSubmit={ this.handleFormSubmit }>
//           <label>Name: <input name={ 'name' } onChange={ this.handleInputChange } value={ name } /></label>
//           <label>Last Name: <input name={ 'lastName' } onChange={ this.handleInputChange } value={ lastName } /></label>
//           <label>Email: <input name={ 'email' }  onChange={ this.handleInputChange } value={ email }/></label>
//           <input type="submit" value={ 'Save' } />
//         </form>
//       </div>
//     )
//   }
// }
//
// ContactForm.propTypes = {
//   contact: PropTypes.shape({
//     name: PropTypes.string,
//     lastName: PropTypes.string,
//     email: PropTypes.string
//   }).isRequired
// };

// export default ContactForm;
