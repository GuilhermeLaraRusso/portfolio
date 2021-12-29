import React from 'react';
import htmlIcon from '../images/HTML5.png';
import cssIcon from '../images/CSS.png';
import jsIcon from '../images/JavaScript.png';
import reactIcon from '../images/React.png';
import mysqlIcon from '../images/MySQL.png';
import dockerIcon from '../images/docker.png';
import mongoIcon from '../images/mongodb.png';
import nodeIcon from '../images/Node.png';
import './Skills.css';

class Skills extends React.Component {
  render() {
    return (
      <div>
        <h3>Aqui estão algumas habilidades que tenho conhecimento e estou aprendendo</h3>
        <ul style={ { listStyleType: 'none' } }>
          <li>HTML</li>
          <li>
            <img src={ htmlIcon } alt="HTML 5" className="images" />
          </li>
          <li>CSS</li>
          <img src={ cssIcon } alt="CSS 3" className="images" />
          {/* <li>JavaScript</li> */}
          <img src={ jsIcon } alt="JavaScript" className="images" />
          {/* <li>React</li> */}
          <img src={ reactIcon } alt="React" className="images" />
          {/* <li>MySQL</li> */}
          <img src={ mysqlIcon } alt="MySQL" className="images" />
          {/* <li>Docker</li> */}
          <img src={ dockerIcon } alt="Docker" className="images" />
          {/* <li>MongoDB</li> */}
          <img src={ mongoIcon } alt="Mongo DB" className="images" />
          {/* <li>Node.JS</li> */}
          <img src={ nodeIcon } alt="Node.js" className="images" />
        </ul>
      </div>
    );
  }
}

export default Skills;
