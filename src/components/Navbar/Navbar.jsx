import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.clickHome = this.clickHome.bind(this);
    this.clickSkills = this.clickSkills.bind(this);
    this.clickLanguage = this.clickLanguage.bind(this);
    this.clickLinkedin = this.clickLinkedin.bind(this);
    this.clickUseful = this.clickUseful.bind(this);
    this.clickProjetos = this.clickProjetos.bind(this);
  }

  clickHome() {
    const { history } = this.props;
    history.push('/');
  }

  clickSkills() {
    const { history } = this.props;
    history.push('/skills');
  }

  clickLanguage() {
    const { history } = this.props;
    history.push('/languages');
  }

  clickLinkedin() {
    const { history } = this.props;
    history.push('/linkedin');
  }

  clickUseful() {
    const { history } = this.props;
    history.push('/usefulLinks');
  }

  clickProjetos() {
    const { history } = this.props;
    history.push('projetos');
  }

  render() {
    return (
      <header className="navbar">
        <button type="button" onClick={ this.clickHome }>Home</button>
        <button type="button" onClick={ this.clickSkills }>Skills</button>
        <button type="button" onClick={ this.clickProjetos }>Projetos</button>
        <button type="button" onClick={ this.clickLanguage }>Línguas</button>
        <button type="button" onClick={ this.clickLinkedin }>Linkedin</button>
        <button type="button" onClick={ this.clickUseful }>Links Úteis</button>
      </header>
    );
  }
}

Navbar.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  // userLogin: PropTypes.func.isRequired,
};

export default withRouter(Navbar);
