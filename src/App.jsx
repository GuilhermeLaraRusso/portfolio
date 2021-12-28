import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// import 'src/components/Navbar/Navbar.css';
// import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Languages from './pages/Languages';
import Linkedin from './pages/Linkedin';
import Skills from './pages/Skills';
import UsefulLinks from './pages/UsefulLinks';
import Navbar from './components/Navbar/Navbar';
import Projetos from './pages/Projetos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/skills" component={ Skills } />
          <Route exact path="/projetos" component={ Projetos } />
          <Route exact path="/languages" component={ Languages } />
          <Route exact path="/linkedin" component={ Linkedin } />
          <Route exact path="/usefulLinks" component={ UsefulLinks } />
        </Switch>
      </header>
    </div>
  );
}

export default App;
