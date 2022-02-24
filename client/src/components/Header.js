import React from 'react';
import Styles from './styles/Header.module.css';
import logo from '../assets/icons/admin.png';
function Header() {
  return (
    <div className="row">
      <div className={Styles.header__title}>
        <span style={{ flex: 1 }}>Admin Portal</span>
        <span>
          <img
            src={logo}
            alt="logo"
            style={{ width: '64px', height: '64px', alignSelf: 'flex-end' }}
          />
        </span>
      </div>
    </div>
  );
}

export default Header;
