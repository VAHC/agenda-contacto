import React from 'react';
import PropTypes from 'prop-types';

class SearchContacts extends React.Component {
  state = {
    searchCriteria: ''
  };

  handleSearchInputChange = ev => {
    this.setState({ searchCriteria: ev.target.value }, () => {
      this.props.onSearch(this.state.searchCriteria)
    });
  };

  handleSearchClick = () => this.props.onSearch(this.state.searchCriteria);

  render() {
    return (
      <div className={ 'search-contacts' }>
        <input value={ this.state.searchCriteria } name={ 'search-contact-input' } onChange={ this.handleSearchInputChange } />
        <button onClick={ this.handleSearchClick }>Buscar</button>
      </div>
    );
  }
}

SearchContacts.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchContacts;
