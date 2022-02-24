import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './styles/Sidebar.module.css';
function Sidebar() {
  return (
    <div className={Styles.sidebar}>
      <nav className={Styles.navigation__bar}>
        <li className={Styles.li}>
          <Link to="/" className={Styles.link}>
            Home
          </Link>
        </li>
        <li className={Styles.li}>
          <Link to="/addStudent" className={Styles.link}>
            Add Student
          </Link>
        </li>
        <li className={Styles.li}>
          <Link to="/displayStudent" className={Styles.link}>
            Display Student
          </Link>
        </li>
      </nav>
    </div>
  );
}

export default Sidebar;
