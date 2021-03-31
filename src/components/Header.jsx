import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = props => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  return (
    <header className="header">
      <img className="header__img" src={logo} alt="Platzi Video" />
      <div className="header__menu">
        <div className="header__menu--profile">
          {
            <img 
              src={hasUser ? gravatar(user.email) : userIcon} 
              alt={hasUser ? user.email : 'Icono de usuario'} 
            />
          }
          <p>Perfil</p>
        </div>
        <ul>
          <li><a href="/">Cuenta</a></li>
          <li><Link to="/login">Iniciar Sesión</Link></li>
        </ul>
      </div>
    </header>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

// export default Header;
export default connect(mapStateToProps, null)(Header);
