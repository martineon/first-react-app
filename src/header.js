import React, { Component } from 'react';
import './header.css';
import mainLogo from './WWF-logo.png';
import backgroundImg from './backgroundImg.jpg'

var headerStyle = {
  backgroundImage: "url(" + backgroundImg + ")"
};

class Header extends Component {
  render() {
    return (
      <div className="header" style={headerStyle}>
        <div className="mainLogo">
          <img src={mainLogo} className="logo" alt="logo" />
        </div>
        <div className="boutonHeader">
          <button className="retourFrise" type="button" name="button">RETOUR A LA FRISE</button>
          <button className="faireDon" type="button" name="button">FAIRE UN DON</button>
        </div>
      </div>
    );
  }
}
export default Header;
