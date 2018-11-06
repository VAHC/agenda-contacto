import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Header = ({ title }) => (
  <div className={ 'header' }>
    <IconButton>
      <MenuIcon fontSize={ 'small' } />
    </IconButton>
    { `Header ${ title }`}
  </div>
);

Header.propTypes = {
  title: PropTypes.string
};

Header.defaultProps = {
  title: ''
};

export default Header;
