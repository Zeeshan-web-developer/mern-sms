import React from 'react';
import Styles from './styles/Header.module.css';
function Header() {
  return (
    <div className="row">
      <div className={Styles.header__title}>Admin Portal</div>
    </div>
  );
}

export default Header;
