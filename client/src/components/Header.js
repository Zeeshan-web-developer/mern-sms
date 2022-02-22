import React from 'react';
import Styles from './styles/Header.module.css';
function Header() {
  return (
    <div className="row">
      <div className="col">
        <h2 className={Styles.header__title}>Admin Portal</h2>
      </div>
    </div>
  );
}

export default Header;
