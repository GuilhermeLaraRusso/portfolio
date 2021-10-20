import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.clickHome = this.clickHome.bind(this);
    this.clickSkills = this.clickSkills.bind(this);
  }

  clickHome() {
    const { history } = this.props;
    history.push('/');
  }

  clickSkills() {
    const { history } = this.props;
    history.push('/skills');
  }

  render() {
    return (
      <header className="navbar">
        <button type="button" onClick={ this.clickHome }>Home</button>
        <button type="button" onClick={ this.clickSkills }>Skills</button>
        <h2>Línguas</h2>
        <h2>Linkedin</h2>
        <h2>Links Úteis</h2>
      </header>
    );
  }
}

Navbar.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  // userLogin: PropTypes.func.isRequired,
};

export default Navbar;
