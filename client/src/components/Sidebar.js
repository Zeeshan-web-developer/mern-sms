import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Styles from './styles/Sidebar.module.css';
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav
              className={`ml-auto ${Styles.navigation__bar} ${Styles.navbar}`}
              navbar
              style={{ flexDirection: 'column' }}
            >
              <NavItem className={Styles.link}>
                <NavLink href="/components/" className={Styles.link}>
                  Components
                </NavLink>
              </NavItem>
              <NavItem className={Styles.link}>
                <NavLink href="/components/" className={Styles.link}>
                  Components
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
