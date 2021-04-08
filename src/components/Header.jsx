import React from 'react';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import cx from 'classnames';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = props => {
  const { user } = props;
  const hasUser = Object.keys(user).length === 0 ? false : true;

  console.log(user)

  const handleLogout = () => {
    props.logoutRequest({})
  }

  const headerClass = cx('header', {
    greenHeader: useLocation().pathname === '/register' 
    || useLocation().pathname === '/login',
  })

  return (
    <header className={headerClass}>
      <img className="header__img" src={logo} alt="Platzi Video" />
      <div className="header__menu">
        <div className="header__menu--profile">
          {
            <img 
              src={hasUser ? 'https://avatars.githubusercontent.com/u/17033156?v=4' : userIcon} 
              alt={hasUser ? user.email : 'Icono de usuario'} 
            />
          }
          <p>Perfil</p>
        </div>
        <ul>
          {
            hasUser &&
            <li><a href="/">{user.name}</a></li>
          }
          {
            hasUser ?
            <li><a to="#logout" onClick={handleLogout}>Cerrar Sesión</a></li>
            :
            <li><Link to="/login">Iniciar Sesión</Link></li>
          }          
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

const mapDispatchToProps = {
  logoutRequest,
}

// export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);
